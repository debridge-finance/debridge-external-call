
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

let heap_next = heap.length;

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

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
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
function __wbg_adapter_22(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4c6c1616b85e20a4(arg0, arg1, addHeapObject(arg2));
}

function isLikeNone(x) {
    return x === undefined || x === null;
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

/**
* @param {Uint8Array} storage
* @param {number} current_external_call_offset
* @param {number} external_call_len
* @returns {ExternalInstructionWrapperIterator}
*/
export function get_external_call_instructions(storage, current_external_call_offset, external_call_len) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.get_external_call_instructions(retptr, addHeapObject(storage), current_external_call_offset, external_call_len);
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
        wasm.get_external_call_account_meta(retptr, addHeapObject(storage), current_external_call_offset, external_call_len, count, addHeapObject(submission_account), addHeapObject(submission_auth_address), addHeapObject(submission_wallet));
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

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_85(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h3878fb7d760359b2(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
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
            wasm.costcalculationinput_calculate_recomended_reward_for_external_call(retptr, this.ptr, addHeapObject(external_call_bytes));
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
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
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
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
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
    imports.wbg.__wbg_push_740e4b286702d964 = function(arg0, arg1) {
        const ret = getObject(arg0).push(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_call_168da88779e35f61 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_9962f939219f1820 = function(arg0, arg1) {
        try {
            var state0 = {a: arg0, b: arg1};
            var cb0 = (arg0, arg1) => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return __wbg_adapter_85(a, state0.b, arg0, arg1);
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
    imports.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper258 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 70, __wbg_adapter_22);
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
        input = new URL('debridge_external_call_bg.wasm');
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
