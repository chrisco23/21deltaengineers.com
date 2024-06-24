<div id="table-toolbar" class="table-toolbar">
    @include('plugin-group-options', [
        'option_type' => 'columns',
        'option_name' => __('Toggle Columns', 'independent-analytics'),
        'option_icon' => 'columns',
        'plugin_groups' => $plugin_groups,
        'options' => $columns,
    ])

    @include('tables.group-select', [
        'groups' => $groups,
        'current_group' => $current_group,
    ])
</div>
