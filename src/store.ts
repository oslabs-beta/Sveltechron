import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Node, SnapShot } from './types';

export const rootNodes: Writable<Node[]> = writable([]);
export const selected: Writable<SnapShot> = writable(null);
export const treeData = writable({});
export const connected = writable(false);
export const stateNodeCont = writable([]);
export const propsNodeCont = writable([]);
export const hasBeenChanged = writable(false);
