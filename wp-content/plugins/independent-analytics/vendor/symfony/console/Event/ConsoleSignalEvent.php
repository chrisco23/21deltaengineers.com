<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace IAWPSCOPED\Symfony\Component\Console\Event;

use IAWPSCOPED\Symfony\Component\Console\Command\Command;
use IAWPSCOPED\Symfony\Component\Console\Input\InputInterface;
use IAWPSCOPED\Symfony\Component\Console\Output\OutputInterface;
/**
 * @author marie <marie@users.noreply.github.com>
 * @internal
 */
final class ConsoleSignalEvent extends ConsoleEvent
{
    private $handlingSignal;
    public function __construct(Command $command, InputInterface $input, OutputInterface $output, int $handlingSignal)
    {
        parent::__construct($command, $input, $output);
        $this->handlingSignal = $handlingSignal;
    }
    public function getHandlingSignal() : int
    {
        return $this->handlingSignal;
    }
}
