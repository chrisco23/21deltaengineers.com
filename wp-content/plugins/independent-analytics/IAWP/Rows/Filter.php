<?php

namespace IAWP_SCOPED\IAWP\Rows;

/** @internal */
class Filter
{
    private $filter;
    public function __construct(array $filter)
    {
        $this->filter = $filter;
    }
    public function filter() : array
    {
        return $this->filter;
    }
    public function method() : string
    {
        if ($this->filter['column'] === $this->filter['database_column']) {
            return 'having';
        } else {
            return 'where';
        }
    }
    public function column() : string
    {
        return $this->filter['database_column'];
    }
    public function operator() : string
    {
        $operator = $this->filter['operator'];
        $result = '';
        if ($operator === 'equal' || $operator === 'is' || $operator === 'exact' || $operator === 'on') {
            $result = '=';
        }
        if ($operator === 'contains') {
            $result = 'like';
        }
        if ($operator === 'isnt') {
            $result = '!=';
        }
        if ($operator === 'greater' || $operator === 'after') {
            $result = '>';
        }
        if ($operator === 'lesser' || $operator === 'before') {
            $result = '<';
        }
        if ($this->filter['inclusion'] === 'exclude') {
            if ($result === '=') {
                return '!=';
            } elseif ($result === '!=') {
                return '=';
            } elseif ($result === '>') {
                return '<=';
            } elseif ($result === '<') {
                return '>=';
            } elseif ($result === 'like') {
                return 'not like';
            }
        }
        return $result;
    }
    public function value() : string
    {
        if ($this->filter['operator'] === 'contains') {
            return '%' . $this->filter['operand'] . '%';
        }
        return $this->filter['operand'];
    }
}
