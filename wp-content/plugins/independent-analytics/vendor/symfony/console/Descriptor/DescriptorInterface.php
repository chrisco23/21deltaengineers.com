<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace IAWPSCOPED\Symfony\Component\Console\Descriptor;

use IAWPSCOPED\Symfony\Component\Console\Output\OutputInterface;
/**
 * Descriptor interface.
 *
 * @author Jean-François Simon <contact@jfsimon.fr>
 * @internal
 */
interface DescriptorInterface
{
    public function describe(OutputInterface $output, object $object, array $options = []);
}
