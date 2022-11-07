
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_28(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h319d14d941a1f9aa(arg0, arg1, addHeapObject(arg2));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedBigInt64Memory0 = new BigInt64Array();

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @returns {string}
*/
export function wallet_placeholder() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.wallet_placeholder(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @returns {string}
*/
export function auth_placeholder() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.auth_placeholder(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @returns {string}
*/
export function submission_placeholder() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.submission_placeholder(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint8Array} storage
* @param {number} current_external_call_offset
* @param {number} external_call_len
* @returns {ExternalInstructionWrapperIterator}
*/
export function get_external_call_instructions(storage, current_external_call_offset, external_call_len) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(storage, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.get_external_call_instructions(retptr, ptr0, len0, current_external_call_offset, external_call_len);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return ExternalInstructionWrapperIterator.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {Uint8Array} storage
* @param {number} current_external_call_offset
* @param {number} external_call_len
* @param {number} count
* @param {any} submission_account
* @param {any} submission_auth_address
* @param {any} submission_wallet
* @returns {ExecuteContext}
*/
export function get_external_call_account_meta(storage, current_external_call_offset, external_call_len, count, submission_account, submission_auth_address, submission_wallet) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(storage, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.get_external_call_account_meta(retptr, ptr0, len0, current_external_call_offset, external_call_len, count, addHeapObject(submission_account), addHeapObject(submission_auth_address), addHeapObject(submission_wallet));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return ExecuteContext.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wbg_adapter_83(arg0, arg1, arg2, arg3, arg4) {
    wasm.wasm_bindgen__convert__closures__invoke3_mut__h79045d2b52e0bc27(arg0, arg1, addHeapObject(arg2), arg3, addHeapObject(arg4));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_100(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h3ffd68270ad1bbb5(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
    if (cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
/**
* Handler for `console.log` invocations.
*
* If a test is currently running it takes the `args` array and stringifies
* it and appends it to the current output of the test. Otherwise it passes
* the arguments to the original `console.log` function, psased as
* `original`.
* @param {Array<any>} args
*/
export function __wbgtest_console_log(args) {
    try {
        wasm.__wbgtest_console_log(addBorrowedObject(args));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* Handler for `console.debug` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_debug(args) {
    try {
        wasm.__wbgtest_console_debug(addBorrowedObject(args));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* Handler for `console.info` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_info(args) {
    try {
        wasm.__wbgtest_console_info(addBorrowedObject(args));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* Handler for `console.warn` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_warn(args) {
    try {
        wasm.__wbgtest_console_warn(addBorrowedObject(args));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* Handler for `console.error` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_error(args) {
    try {
        wasm.__wbgtest_console_error(addBorrowedObject(args));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
export class CalculationError {

    static __wrap(ptr) {
        const obj = Object.create(CalculationError.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_calculationerror_free(ptr);
    }
}
/**
*/
export class CostCalculationInput {

    static __wrap(ptr) {
        const obj = Object.create(CostCalculationInput.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_costcalculationinput_free(ptr);
    }
    /**
    * @returns {number}
    */
    get native_sender_len() {
        const ret = wasm.__wbg_get_costcalculationinput_native_sender_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set native_sender_len(arg0) {
        wasm.__wbg_set_costcalculationinput_native_sender_len(this.ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_required_temp_rent_cost() {
        const ret = wasm.__wbg_get_costcalculationinput_is_required_temp_rent_cost(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_required_temp_rent_cost(arg0) {
        wasm.__wbg_set_costcalculationinput_is_required_temp_rent_cost(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get confirmation_count() {
        const ret = wasm.__wbg_get_costcalculationinput_confirmation_count(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set confirmation_count(arg0) {
        wasm.__wbg_set_costcalculationinput_confirmation_count(this.ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get solana_rent_lamports_per_byte_year() {
        const ret = wasm.__wbg_get_costcalculationinput_solana_rent_lamports_per_byte_year(this.ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set solana_rent_lamports_per_byte_year(arg0) {
        wasm.__wbg_set_costcalculationinput_solana_rent_lamports_per_byte_year(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get solana_exemption_threshold() {
        const ret = wasm.__wbg_get_costcalculationinput_solana_exemption_threshold(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set solana_exemption_threshold(arg0) {
        wasm.__wbg_set_costcalculationinput_solana_exemption_threshold(this.ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get solana_signatures_rent() {
        const ret = wasm.__wbg_get_costcalculationinput_solana_signatures_rent(this.ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set solana_signatures_rent(arg0) {
        wasm.__wbg_set_costcalculationinput_solana_signatures_rent(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get solana_nominal_price() {
        const ret = wasm.__wbg_get_costcalculationinput_solana_nominal_price(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set solana_nominal_price(arg0) {
        wasm.__wbg_set_costcalculationinput_solana_nominal_price(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get asset_nominal_price() {
        const ret = wasm.__wbg_get_costcalculationinput_asset_nominal_price(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set asset_nominal_price(arg0) {
        wasm.__wbg_set_costcalculationinput_asset_nominal_price(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get asset_decimals() {
        const ret = wasm.__wbg_get_costcalculationinput_asset_decimals(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set asset_decimals(arg0) {
        wasm.__wbg_set_costcalculationinput_asset_decimals(this.ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_bridge_initialized() {
        const ret = wasm.__wbg_get_costcalculationinput_is_bridge_initialized(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_bridge_initialized(arg0) {
        wasm.__wbg_set_costcalculationinput_is_bridge_initialized(this.ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_receiver_wallet_initialized() {
        const ret = wasm.__wbg_get_costcalculationinput_is_receiver_wallet_initialized(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_receiver_wallet_initialized(arg0) {
        wasm.__wbg_set_costcalculationinput_is_receiver_wallet_initialized(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get profitable_multiplier() {
        const ret = wasm.__wbg_get_costcalculationinput_profitable_multiplier(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set profitable_multiplier(arg0) {
        wasm.__wbg_set_costcalculationinput_profitable_multiplier(this.ptr, arg0);
    }
    /**
    * @returns {bigint | undefined}
    */
    get external_call_len() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_costcalculationinput_external_call_len(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getBigInt64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint | undefined} arg0
    */
    set external_call_len(arg0) {
        wasm.__wbg_set_costcalculationinput_external_call_len(this.ptr, !isLikeNone(arg0), isLikeNone(arg0) ? 0n : arg0);
    }
    /**
    * @param {number} native_sender_len
    * @param {boolean} is_required_temp_rent_cost
    * @param {number} confirmation_count
    * @param {bigint} solana_rent_lamports_per_byte_year
    * @param {number} solana_exemption_threshold
    * @param {bigint} solana_signatures_rent
    * @param {number} solana_nominal_price
    * @param {number} asset_nominal_price
    * @param {number} asset_decimals
    * @param {boolean} is_bridge_initialized
    * @param {boolean} is_receiver_wallet_initialized
    * @param {number} profitable_multiplier
    * @param {bigint | undefined} external_call_len
    */
    constructor(native_sender_len, is_required_temp_rent_cost, confirmation_count, solana_rent_lamports_per_byte_year, solana_exemption_threshold, solana_signatures_rent, solana_nominal_price, asset_nominal_price, asset_decimals, is_bridge_initialized, is_receiver_wallet_initialized, profitable_multiplier, external_call_len) {
        const ret = wasm.costcalculationinput_new(native_sender_len, is_required_temp_rent_cost, confirmation_count, solana_rent_lamports_per_byte_year, solana_exemption_threshold, solana_signatures_rent, solana_nominal_price, asset_nominal_price, asset_decimals, is_bridge_initialized, is_receiver_wallet_initialized, profitable_multiplier, !isLikeNone(external_call_len), isLikeNone(external_call_len) ? 0n : external_call_len);
        return CostCalculationInput.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    calculate_sol_relative_price_with_profit() {
        const ret = wasm.costcalculationinput_calculate_sol_relative_price_with_profit(this.ptr);
        return ret;
    }
    /**
    * @returns {Promise<bigint>}
    */
    calculate_recomended_claim_execution_fee() {
        const ret = wasm.costcalculationinput_calculate_recomended_claim_execution_fee(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {bigint} expense
    * @returns {bigint}
    */
    calculate_recomended_reward_for_external_instruction(expense) {
        const ret = wasm.costcalculationinput_calculate_recomended_reward_for_external_instruction(this.ptr, expense);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {Uint8Array} external_call_bytes
    * @returns {Uint8Array}
    */
    calculate_recomended_reward_for_external_call(external_call_bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(external_call_bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.costcalculationinput_calculate_recomended_reward_for_external_call(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class ExecuteContext {

    static __wrap(ptr) {
        const obj = Object.create(ExecuteContext.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_executecontext_free(ptr);
    }
    /**
    * @returns {Array<any>}
    */
    remaning_accounts() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.executecontext_remaning_accounts(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Array<any>}
    */
    reversed_subsitution_bumps() {
        const ret = wasm.executecontext_reversed_subsitution_bumps(this.ptr);
        return takeObject(ret);
    }
}
/**
*/
export class ExternalInstructionWrapper {

    static __wrap(ptr) {
        const obj = Object.create(ExternalInstructionWrapper.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_externalinstructionwrapper_free(ptr);
    }
    /**
    * @param {bigint | undefined} reward
    * @param {bigint | undefined} expense
    * @param {boolean} is_in_mandatory_block
    * @param {Array<any>} amount_substitutions
    * @param {Array<any>} wallet_substitutions
    * @param {any} instructions
    * @param {CostCalculationInput | undefined} cost_calculation_input
    */
    constructor(reward, expense, is_in_mandatory_block, amount_substitutions, wallet_substitutions, instructions, cost_calculation_input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            let ptr0 = 0;
            if (!isLikeNone(cost_calculation_input)) {
                _assertClass(cost_calculation_input, CostCalculationInput);
                ptr0 = cost_calculation_input.ptr;
                cost_calculation_input.ptr = 0;
            }
            wasm.externalinstructionwrapper_new(retptr, !isLikeNone(reward), isLikeNone(reward) ? 0n : reward, !isLikeNone(expense), isLikeNone(expense) ? 0n : expense, is_in_mandatory_block, addHeapObject(amount_substitutions), addHeapObject(wallet_substitutions), addHeapObject(instructions), ptr0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ExternalInstructionWrapper.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {bigint | undefined}
    */
    get expenses() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.externalinstructionwrapper_expenses(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getBigInt64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} value
    */
    set expenses(value) {
        wasm.externalinstructionwrapper_set_expenses(this.ptr, value);
    }
    /**
    * @returns {bigint}
    */
    get reward() {
        const ret = wasm.__wbg_get_costcalculationinput_solana_rent_lamports_per_byte_year(this.ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} value
    */
    set reward(value) {
        wasm.__wbg_set_costcalculationinput_solana_rent_lamports_per_byte_year(this.ptr, value);
    }
    /**
    * @returns {any}
    */
    get instruction() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.externalinstructionwrapper_instruction(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {any} instruction
    */
    set instruction(instruction) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.externalinstructionwrapper_set_instruction(retptr, this.ptr, addHeapObject(instruction));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} reward
    * @param {any} beneficiary_pubkey
    * @returns {ExternalInstructionWrapper}
    */
    static close_spl_wallet(reward, beneficiary_pubkey) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.externalinstructionwrapper_close_spl_wallet(retptr, reward, addHeapObject(beneficiary_pubkey));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ExternalInstructionWrapper.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    serialize() {
        try {
            const ptr = this.__destroy_into_raw();
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.externalinstructionwrapper_serialize(retptr, ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class ExternalInstructionWrapperIterator {

    static __wrap(ptr) {
        const obj = Object.create(ExternalInstructionWrapperIterator.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_externalinstructionwrapperiterator_free(ptr);
    }
    /**
    * @returns {ExternalInstructionWrapper | undefined}
    */
    next() {
        const ret = wasm.externalinstructionwrapperiterator_next(this.ptr);
        return ret === 0 ? undefined : ExternalInstructionWrapper.__wrap(ret);
    }
}
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
export class WasmBindgenTestContext {

    static __wrap(ptr) {
        const obj = Object.create(WasmBindgenTestContext.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmbindgentestcontext_free(ptr);
    }
    /**
    * Creates a new context ready to run tests.
    *
    * A `Context` is the main structure through which test execution is
    * coordinated, and this will collect output and results for all executed
    * tests.
    */
    constructor() {
        const ret = wasm.wasmbindgentestcontext_new();
        return WasmBindgenTestContext.__wrap(ret);
    }
    /**
    * Inform this context about runtime arguments passed to the test
    * harness.
    *
    * Eventually this will be used to support flags, but for now it's just
    * used to support test filters.
    * @param {any[]} args
    */
    args(args) {
        const ptr0 = passArrayJsValueToWasm0(args, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wasmbindgentestcontext_args(this.ptr, ptr0, len0);
    }
    /**
    * Executes a list of tests, returning a promise representing their
    * eventual completion.
    *
    * This is the main entry point for executing tests. All the tests passed
    * in are the JS `Function` object that was plucked off the
    * `WebAssembly.Instance` exports list.
    *
    * The promise returned resolves to either `true` if all tests passed or
    * `false` if at least one test failed.
    * @param {any[]} tests
    * @returns {Promise<any>}
    */
    run(tests) {
        const ptr0 = passArrayJsValueToWasm0(tests, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmbindgentestcontext_run(this.ptr, ptr0, len0);
        return takeObject(ret);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = JSON.stringify(obj === undefined ? null : obj);
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_calculationerror_new = function(arg0) {
        const ret = CalculationError.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_get_57245cc7d7c7619d = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_new_1d9a920c6bfc44a8 = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_97ae9d8645dc388b = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_forEach_ce1177df15902e0c = function(arg0, arg1, arg2) {
        try {
            var state0 = {a: arg1, b: arg2};
            var cb0 = (arg0, arg1, arg2) => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return __wbg_adapter_83(a, state0.b, arg0, arg1, arg2);
                } finally {
                    state0.a = a;
                }
            };
            getObject(arg0).forEach(cb0);
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_push_740e4b286702d964 = function(arg0, arg1) {
        const ret = getObject(arg0).push(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_message_fe2af63ccc8985bc = function(arg0) {
        const ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_name_48eda3ae6aa697ca = function(arg0) {
        const ret = getObject(arg0).name;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_168da88779e35f61 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_9962f939219f1820 = function(arg0, arg1) {
        try {
            var state0 = {a: arg0, b: arg1};
            var cb0 = (arg0, arg1) => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return __wbg_adapter_100(a, state0.b, arg0, arg1);
                } finally {
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return addHeapObject(ret);
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_resolve_99fe17964f31ffc0 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_11f7a54d67b4bfad = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_6d479506f72c6a71 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_f2557cc78490aceb = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_7f206bda628d5286 = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_ba75c50d1cf384f4 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
        const ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbg_static_accessor_document_0187e21f53c04a48 = function() {
        const ret = document;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getElementById_4c39186cc7ced742 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_settextcontent_344de5dc2a8e15ca = function(arg0, arg1, arg2) {
        getObject(arg0).textContent = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_textcontent_46a9e23ba5cbd900 = function(arg0, arg1) {
        const ret = getObject(arg1).textContent;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_stack_2ac21c4ea9c454f4 = function(arg0) {
        const ret = getObject(arg0).stack;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_74338d9cb12c5d75 = function(arg0) {
        const ret = getObject(arg0).self;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_log_d59c74802fa44fe2 = function(arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_stack_475ccfd121fab8c9 = function(arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_String_0713d2a3d2b5f6b1 = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_closure_wrapper291 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 79, __wbg_adapter_28);
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = new BigInt64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint32Memory0 = new Uint32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('debridge_external_call_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
