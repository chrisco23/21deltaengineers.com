import {Controller} from "@hotwired/stimulus"
import * as easepick from '@easepick/bundle'

/**
 * This controller is designed to work with either a relative range or an
 * exact range.
 *
 * You can use a relative range by supplying a relativeRangeId value.
 *
 * You can use an exact range by supplying an exactStart and exactEnd value.
 */
export default class extends Controller {
    static values = {
        relativeRangeId: String,
        exactStart: String,
        exactEnd: String,
        firstDayOfWeek: Number, // 0 is Sunday, 1 is Monday, etc...
        cssUrl: String,
        format: String
    }
    static targets = ["modal", "modalButton", "easepick", "apply", "relativeRange"]

    easepicker = undefined
    exactStart = undefined
    exactEnd = undefined
    relativeRangeId = undefined

    connect() {
        this.setFromValues()
        this.enableEasepick()
        this.updateUserInterface()
        document.addEventListener('click', this.maybeClose)
    }

    disconnect() {
        document.removeEventListener('click', this.maybeClose)
    }

    setFromValues() {
        // If any values are empty strings, set them equal to undefined instead
        this.exactStart = this.exactStartValue === "" ? undefined : new easepick.DateTime(this.exactStartValue)
        this.exactEnd = this.exactEndValue === "" ? undefined : new easepick.DateTime(this.exactEndValue)
        this.relativeRangeId = this.relativeRangeIdValue === "" ? undefined : this.relativeRangeIdValue
    }

    maybeClose = (event) => {
        const isOpen = this.modalTarget.classList.contains('show')
        const isInComponent = this.element.contains(event.target)


        if (isOpen && !isInComponent) {
            this.closeModal()
        }
    }

    toggleModal(e) {
        e.preventDefault();
        const isOpen = this.modalTarget.classList.contains('show')
        isOpen ? this.closeModal() : this.openModal()
    }

    apply() {
        let detail = {}

        if (this.relativeRangeId) {
            detail = {relativeRangeId: this.relativeRangeId}
        } else {
            detail = {
                exactStart: this.exactStart.format('YYYY-MM-DD'),
                exactEnd: this.exactEnd.format('YYYY-MM-DD')
            }
        }

        document.dispatchEvent(
            new CustomEvent('iawp:changeDates', {
                detail
            })
        )

        // Update values so future resets reset to the last applied state
        this.relativeRangeIdValue = detail.relativeRangeId
        this.exactStartValue = detail.exactStart
        this.exactEndValue = detail.exactEnd

        // Todo - This should happen in a central place from report_controller
        this.closeModal()
    }

    openModal() {
        this.modalTarget.classList.add('show')
        this.modalButtonTarget.classList.add('open')
        this.easepickTarget.nextSibling.classList.add('show');
        document.getElementById('iawp-layout').classList.add('modal-open');
    }

    closeModal() {
        this.modalTarget.classList.remove('show')
        this.modalButtonTarget.classList.remove('open')
        document.getElementById('iawp-layout').classList.remove('modal-open');
        this.setFromValues()
        this.updateUserInterface()
        setTimeout(() => {
            this.easepickTarget.nextSibling.classList.remove('show');
        }, 200)
    }

    relativeRangeSelected = (e) => {
        this.exactStart = undefined
        this.exactEnd = undefined
        this.relativeRangeId = e.target.dataset.relativeRangeId
        this.updateUserInterface()
    }

    exactRangeSelected = (e) => {
        this.exactStart = e.detail.start
        this.exactEnd = e.detail.end
        this.relativeRangeId = undefined
        this.updateUserInterface()
    }

    updateUserInterface() {
        const isExact = this.exactStart && this.exactEnd && !this.relativeRangeId

        // Select the correct relative range button, if any
        this.relativeRangeTargets.forEach((button) => {
            const match = button.dataset.relativeRangeId === this.relativeRangeId
            button.classList.toggle('active', !match)
            button.classList.toggle('active', match)
        })

        if (isExact) {
            this.easepicker.setDateRange(this.exactStart, this.exactEnd)
            this.applyTarget.textContent = iawpText.exactDates
        } else {
            const [start, end] = this.relativeRangeDates()
            this.easepicker.setDateRange(start, end)
            this.applyTarget.textContent = iawpText.relativeDates
        }
    }

    relativeRangeDates() {
        const button = this.relativeRangeTargets.find(
            (button) => button.dataset.relativeRangeId === this.relativeRangeId
        )
        const start = new easepick.DateTime(button.dataset.relativeRangeStart);
        const end = new easepick.DateTime(button.dataset.relativeRangeEnd);
        return [start, end]
    }

    enableEasepick() {
        let start, end

        if (this.relativeRangeId) {
            [start, end] = this.relativeRangeDates()
        } else {
            start = this.exactStart
            end = this.exactEnd
        }

        this.easepicker = new easepick.create({
            element: this.easepickTarget,
            css: [this.cssUrlValue],
            inline: true,
            firstDay: this.firstDayOfWeekValue,
            format: this.formatValue, // Todo - Does this work?
            calendars: 2,
            grid: 2,
            autoApply: true,
            plugins: [
                easepick.RangePlugin
            ],
            RangePlugin: {
                startDate: start.format(this.formatValue),
                endDate: end.format(this.formatValue),
            },
            setup: (picker) => {
                picker.on('select', this.exactRangeSelected)
                this.easepickTarget.nextSibling.classList.add('inline')
            }
        })
    }
}