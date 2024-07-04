// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l7ZUS":[function(require,module,exports) {
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _userRoles = require("./modules/user-roles");
var _duplicateField = require("./modules/duplicate-field");
var _emailReports = require("./modules/email-reports");
var _download = require("./download");
jQuery(function($) {
    (0, _userRoles.UserRoles).setup();
    (0, _duplicateField.FieldDuplicator).setup();
    (0, _emailReports.EmailReports).setup();
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iawp-export-views").addEventListener("click", function(e) {
        var button = e.target;
        button.textContent = iawpText.exportingPages;
        button.setAttribute("disabled", "disabled");
        var data = (0, _objectSpread._)({}, iawpActions.export_pages);
        jQuery.post(ajaxurl, data, function(response) {
            (0, _download.downloadCSV)("exported-pages.csv", response);
            button.textContent = iawpText.exportPages;
            button.removeAttribute("disabled");
        });
    });
    document.getElementById("iawp-export-referrers").addEventListener("click", function(e) {
        var button = e.target;
        button.textContent = iawpText.exportingReferrers;
        button.setAttribute("disabled", "disabled");
        var data = (0, _objectSpread._)({}, iawpActions.export_referrers);
        jQuery.post(ajaxurl, data, function(response) {
            (0, _download.downloadCSV)("exported-referrers.csv", response);
            button.textContent = iawpText.exportReferrers;
            button.removeAttribute("disabled");
        });
    });
    document.getElementById("iawp-export-geo").addEventListener("click", function(e) {
        var button = e.target;
        button.textContent = iawpText.exportingGeolocations;
        button.setAttribute("disabled", "disabled");
        var data = (0, _objectSpread._)({}, iawpActions.export_geo);
        jQuery.post(ajaxurl, data, function(response) {
            (0, _download.downloadCSV)("exported-geo.csv", response);
            button.textContent = iawpText.exportGeolocations;
            button.removeAttribute("disabled");
        });
    });
    document.getElementById("iawp-export-devices").addEventListener("click", function(e) {
        var button = e.target;
        button.textContent = iawpText.exportingDevices;
        button.setAttribute("disabled", "disabled");
        var data = (0, _objectSpread._)({}, iawpActions.export_devices);
        jQuery.post(ajaxurl, data, function(response) {
            (0, _download.downloadCSV)("exported-devices.csv", response);
            button.textContent = iawpText.exportDevices;
            button.removeAttribute("disabled");
        });
    });
    var campaignExportButton = document.getElementById("iawp-export-campaigns");
    if (campaignExportButton) campaignExportButton.addEventListener("click", function(e) {
        var button = e.target;
        button.textContent = iawpText.exportingCampaigns;
        button.setAttribute("disabled", "disabled");
        var data = (0, _objectSpread._)({}, iawpActions.export_campaigns);
        jQuery.post(ajaxurl, data, function(response) {
            (0, _download.downloadCSV)("exported-campaigns.csv", response);
            button.textContent = iawpText.exportCampaigns;
            button.removeAttribute("disabled");
        });
    });
});

},{"@swc/helpers/_/_object_spread":"aevtD","./modules/user-roles":"bYNa1","./modules/duplicate-field":"avnyp","./modules/email-reports":"iSubT","./download":"gEyye"}],"aevtD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread", function() {
    return _object_spread;
});
parcelHelpers.export(exports, "_", function() {
    return _object_spread;
});
var _definePropertyJs = require("./_define_property.js");
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _definePropertyJs._define_property)(target, key, source[key]);
        });
    }
    return target;
}

},{"./_define_property.js":"bWQmf","@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"bWQmf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_define_property", function() {
    return _define_property;
});
parcelHelpers.export(exports, "_", function() {
    return _define_property;
});
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"jIm8e":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bYNa1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserRoles", function() {
    return UserRoles;
});
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var $ = jQuery;
var UserRoles = {
    setup: function setup() {
        var self = this;
        $("#user-role-select").on("change", function() {
            $(".role").removeClass("show");
            $(".role-" + $(this).val()).addClass("show");
        });
        $("#capabilities-form").on("submit", function(e) {
            e.preventDefault();
            self.save();
        });
    },
    save: function save() {
        $("#save-permissions").addClass("saving");
        var capabilities = {};
        $(".role").each(function() {
            var role = $(this).find("select").attr("name");
            var val = $(this).find("select").val();
            capabilities[role] = val;
        });
        capabilities = JSON.stringify(capabilities);
        var whiteLabel = $("#iawp_white_label").prop("checked");
        var data = (0, _objectSpreadProps._)((0, _objectSpread._)({}, iawpActions.update_capabilities), {
            "capabilities": capabilities,
            "white_label": whiteLabel
        });
        jQuery.post(ajaxurl, data, function(response) {
            $("#save-permissions").removeClass("saving");
        });
    }
};

},{"@swc/helpers/_/_object_spread":"aevtD","@swc/helpers/_/_object_spread_props":"fXEan","@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"fXEan":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread_props", function() {
    return _object_spread_props;
});
parcelHelpers.export(exports, "_", function() {
    return _object_spread_props;
});
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"avnyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FieldDuplicator", function() {
    return FieldDuplicator;
});
var $ = jQuery;
var FieldDuplicator = {
    setup: function setup() {
        var self = this;
        var duplicators = $(".duplicator");
        duplicators.each(function(index, duplicator) {
            $(this).find(".duplicate-button").on("click", function(e) {
                e.preventDefault();
                self.createNewEntry($(duplicator));
            });
        });
        var entries = $(".entry");
        entries.each(function() {
            self.attachRemoveEvent($(this));
        });
    },
    createNewEntry: function createNewEntry(duplicator) {
        var entryField = duplicator.find(".new-field");
        if (this.errorChecks(entryField)) return;
        var clone = duplicator.find(".blueprint .entry").clone();
        clone.find("input").val(entryField.val());
        duplicator.next().append(clone);
        if (entryField.hasClass("select")) entryField.find('option[value="' + entryField.val() + '"').remove();
        else entryField.val("");
        this.resetIndex(duplicator.next(".saved"));
        this.attachRemoveEvent(clone);
        duplicator.parents("form").removeClass("empty exists");
        this.hideNoneMessage(duplicator);
    },
    attachRemoveEvent: function attachRemoveEvent(entry) {
        var self = this;
        entry.find(".remove").on("click", function(e) {
            e.preventDefault();
            var saved = $(entry).parent(".saved");
            $(this).parents("form").addClass("unsaved");
            $(this).parent().remove();
            self.resetIndex(saved);
        });
    },
    resetIndex: function resetIndex(saved) {
        var count = 0;
        saved.find("input").each(function() {
            $(this).attr("name", $(this).attr("data-option") + "[" + count + "]");
            $(this).attr("id", $(this).attr("data-option") + "[" + count + "]");
            count++;
        });
        saved.parents("form").addClass("unsaved");
    },
    errorChecks: function(entryField) {
        if (entryField.val() == "") {
            entryField.parents("form").addClass("empty");
            return true;
        }
        var existingValues = [];
        entryField.parent().parent().next(".saved").find(".entry").each(function() {
            existingValues.push($(this).find("input").val());
        });
        if (existingValues.includes(entryField.val())) {
            entryField.parents("form").addClass("exists");
            return true;
        }
        return false;
    },
    hideNoneMessage: function hideNoneMessage(duplicator) {
        duplicator.parent().find(".none").hide();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"iSubT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailReports", function() {
    return EmailReports;
});
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var $ = jQuery;
var EmailReports = {
    setup: function setup() {
        var self = this;
        this.disableTestButtonIfEmpty();
        $(".email-reports .new-address input").on("change", function() {
            $("#test-email").attr("disabled", true);
        });
        $(".email-reports .saved .remove").on("click", function() {
            self.disableTestButtonIfEmpty();
        });
        // Show the correct interval note
        $("#" + $("#iawp_email_report_interval").val() + "-interval-note").show();
        // Change which note is visible based on selected interval
        $("#iawp_email_report_interval").on("change", function() {
            $(".interval-note").hide();
            $("#" + $(this).val() + "-interval-note").show();
        });
        var savedColors = $("#iawp_email_report_colors");
        var colorPickers = $(".iawp-color-picker");
        var options = {
            change: function change(event, ui) {
                var colors = [];
                colorPickers.each(function() {
                    colors.push($(this).iris("color"));
                });
                savedColors.val(colors.join(","));
            }
        };
        colorPickers.each(function() {
            $(this).wpColorPicker(options);
        });
        $("#test-email").on("click", function(e) {
            e.preventDefault();
            self.sendTestEmail();
        });
        $("#preview-email").on("click", function(e) {
            e.preventDefault();
            self.previewEmail(savedColors.val());
        });
        $("#close-email-preview").on("click", function(e) {
            e.preventDefault();
            $("#email-preview-container").removeClass("visible");
            $("#email-preview").html("");
        });
    },
    disableTestButtonIfEmpty: function disableTestButtonIfEmpty() {
        if ($(".email-reports .saved input").length == 0) $("#test-email").attr("disabled", true);
    },
    sendTestEmail: function sendTestEmail() {
        var data = (0, _objectSpread._)({}, iawpActions.test_email);
        $("#test-email").addClass("sending");
        jQuery.post(ajaxurl, data, function(response) {
            $("#test-email").removeClass("sending");
            if (response) $("#test-email").addClass("sent");
            else $("#test-email").addClass("failed");
            setTimeout(function() {
                $("#test-email").removeClass("sent failed");
            }, 1000);
        });
    },
    previewEmail: function previewEmail(colors) {
        var data = (0, _objectSpreadProps._)((0, _objectSpread._)({}, iawpActions.preview_email), {
            colors: colors
        });
        $("#preview-email").addClass("sending");
        jQuery.post(ajaxurl, data, function(response) {
            $("#preview-email").removeClass("sending");
            if (response.success) {
                $("#preview-email").addClass("sent");
                $("#email-preview").html(response.data.html);
                $("#email-preview-container").addClass("visible");
            } else $("#preview-email").addClass("failed");
            setTimeout(function() {
                $("#preview-email").removeClass("sent failed");
            }, 1000);
        });
    }
};

},{"@swc/helpers/_/_object_spread":"aevtD","@swc/helpers/_/_object_spread_props":"fXEan","@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"gEyye":[function(require,module,exports) {
function downloadCSV(fileName, data) {
    var blob = new Blob([
        data
    ], {
        type: "text/csv"
    });
    var element = window.document.createElement("a");
    element.href = window.URL.createObjectURL(blob);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function downloadJSON(fileName, data) {
    var blob = new Blob([
        data
    ], {
        type: "application/json"
    });
    var element = window.document.createElement("a");
    element.href = window.URL.createObjectURL(blob);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
module.exports = {
    downloadCSV: downloadCSV,
    downloadJSON: downloadJSON
};

},{}]},["l7ZUS"], "l7ZUS", "parcelRequirec571")

//# sourceMappingURL=settings.js.map
