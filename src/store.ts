import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Message, Node, SnapShot, Difference } from './types';

export const rootNodes: Writable<Node[]> = writable([]);
export const selected: Writable<SnapShot> = writable(null);
export const treeData = writable({});
export const connected = writable(false);
