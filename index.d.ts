import {StorageEngine} from "redux-storage";

/**

 */
interface WhitelistArg {
    [key: number]: string | string[];
}

/**
 * Filter decorator for redux-storage to only store a subset of the whole state tree.
 * @param engine
 * @param whitelist
 * @example
 * engine = filter(engine, [
 * 'simple-key',
 * ['nested', 'key'],
 * ['another', 'very', 'nested', 'key']
 * ]);
 */
export default function(engine: StorageEngine, whitelist?: WhitelistArg): StorageEngine;
