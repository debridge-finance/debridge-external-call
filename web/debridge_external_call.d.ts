/* tslint:disable */
/* eslint-disable */
/**
* @returns {string}
*/
export function wallet_placeholder(): string;
/**
* @returns {string}
*/
export function auth_placeholder(): string;
/**
* @returns {string}
*/
export function submission_placeholder(): string;
/**
* @param {Uint8Array} storage
* @param {number} current_external_call_offset
* @param {number} external_call_len
* @returns {ExternalInstructionWrapperIterator}
*/
export function get_external_call_instructions(storage: Uint8Array, current_external_call_offset: number, external_call_len: number): ExternalInstructionWrapperIterator;
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
export function get_external_call_account_meta(storage: Uint8Array, current_external_call_offset: number, external_call_len: number, count: number, submission_account: any, submission_auth_address: any, submission_wallet: any): ExecuteContext;
/**
*/
export class CalculationError {
  free(): void;
}
/**
*/
export class CostCalculationInput {
  free(): void;
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
  constructor(native_sender_len: number, is_required_temp_rent_cost: boolean, confirmation_count: number, solana_rent_lamports_per_byte_year: bigint, solana_exemption_threshold: number, solana_signatures_rent: bigint, solana_nominal_price: number, asset_nominal_price: number, asset_decimals: number, is_bridge_initialized: boolean, is_receiver_wallet_initialized: boolean, profitable_multiplier: number, external_call_len?: bigint);
/**
* @returns {number}
*/
  calculate_sol_relative_price_with_profit(): number;
/**
* @returns {Promise<bigint>}
*/
  calculate_recomended_claim_execution_fee(): Promise<bigint>;
/**
* @param {bigint} expense
* @returns {bigint}
*/
  calculate_recomended_reward_for_external_instruction(expense: bigint): bigint;
/**
* @param {Uint8Array} external_call_bytes
* @returns {Uint8Array}
*/
  calculate_recomended_reward_for_external_call(external_call_bytes: Uint8Array): Uint8Array;
/**
*/
  asset_decimals: number;
/**
*/
  asset_nominal_price: number;
/**
*/
  confirmation_count: number;
/**
*/
  external_call_len?: bigint;
/**
*/
  is_bridge_initialized: boolean;
/**
*/
  is_receiver_wallet_initialized: boolean;
/**
*/
  is_required_temp_rent_cost: boolean;
/**
*/
  native_sender_len: number;
/**
*/
  profitable_multiplier: number;
/**
*/
  solana_exemption_threshold: number;
/**
*/
  solana_nominal_price: number;
/**
*/
  solana_rent_lamports_per_byte_year: bigint;
/**
*/
  solana_signatures_rent: bigint;
}
/**
*/
export class ExecuteContext {
  free(): void;
/**
* @returns {Array<any>}
*/
  remaning_accounts(): Array<any>;
/**
* @returns {Array<any>}
*/
  reversed_subsitution_bumps(): Array<any>;
}
/**
*/
export class ExternalInstructionWrapper {
  free(): void;
/**
* @param {bigint | undefined} reward
* @param {bigint | undefined} expense
* @param {boolean} is_in_mandatory_block
* @param {Array<any>} amount_substitutions
* @param {Array<any>} wallet_substitutions
* @param {any} instructions
* @param {CostCalculationInput | undefined} cost_calculation_input
*/
  constructor(reward: bigint | undefined, expense: bigint | undefined, is_in_mandatory_block: boolean, amount_substitutions: Array<any>, wallet_substitutions: Array<any>, instructions: any, cost_calculation_input?: CostCalculationInput);
/**
* @param {bigint} reward
* @param {any} beneficiary_pubkey
* @returns {ExternalInstructionWrapper}
*/
  static close_spl_wallet(reward: bigint, beneficiary_pubkey: any): ExternalInstructionWrapper;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
*/
  expenses: bigint;
/**
*/
  instruction: any;
/**
*/
  reward: bigint;
}
/**
*/
export class ExternalInstructionWrapperIterator {
  free(): void;
/**
* @returns {ExternalInstructionWrapper | undefined}
*/
  next(): ExternalInstructionWrapper | undefined;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_externalinstructionwrapper_free: (a: number) => void;
  readonly __wbg_externalinstructionwrapperiterator_free: (a: number) => void;
  readonly externalinstructionwrapperiterator_next: (a: number) => number;
  readonly externalinstructionwrapper_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
  readonly externalinstructionwrapper_expenses: (a: number, b: number) => void;
  readonly externalinstructionwrapper_set_expenses: (a: number, b: number) => void;
  readonly externalinstructionwrapper_instruction: (a: number, b: number) => void;
  readonly externalinstructionwrapper_set_instruction: (a: number, b: number, c: number) => void;
  readonly externalinstructionwrapper_close_spl_wallet: (a: number, b: number, c: number) => void;
  readonly externalinstructionwrapper_serialize: (a: number, b: number) => void;
  readonly wallet_placeholder: (a: number) => void;
  readonly auth_placeholder: (a: number) => void;
  readonly submission_placeholder: (a: number) => void;
  readonly __wbg_executecontext_free: (a: number) => void;
  readonly executecontext_remaning_accounts: (a: number, b: number) => void;
  readonly executecontext_reversed_subsitution_bumps: (a: number) => number;
  readonly get_external_call_instructions: (a: number, b: number, c: number, d: number) => void;
  readonly get_external_call_account_meta: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly __wbg_costcalculationinput_free: (a: number) => void;
  readonly __wbg_get_costcalculationinput_native_sender_len: (a: number) => number;
  readonly __wbg_set_costcalculationinput_native_sender_len: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_is_required_temp_rent_cost: (a: number) => number;
  readonly __wbg_set_costcalculationinput_is_required_temp_rent_cost: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_confirmation_count: (a: number) => number;
  readonly __wbg_set_costcalculationinput_confirmation_count: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_solana_rent_lamports_per_byte_year: (a: number) => number;
  readonly __wbg_set_costcalculationinput_solana_rent_lamports_per_byte_year: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_solana_exemption_threshold: (a: number) => number;
  readonly __wbg_set_costcalculationinput_solana_exemption_threshold: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_solana_signatures_rent: (a: number) => number;
  readonly __wbg_set_costcalculationinput_solana_signatures_rent: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_solana_nominal_price: (a: number) => number;
  readonly __wbg_set_costcalculationinput_solana_nominal_price: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_asset_nominal_price: (a: number) => number;
  readonly __wbg_set_costcalculationinput_asset_nominal_price: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_asset_decimals: (a: number) => number;
  readonly __wbg_set_costcalculationinput_asset_decimals: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_is_bridge_initialized: (a: number) => number;
  readonly __wbg_set_costcalculationinput_is_bridge_initialized: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_is_receiver_wallet_initialized: (a: number) => number;
  readonly __wbg_set_costcalculationinput_is_receiver_wallet_initialized: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_profitable_multiplier: (a: number) => number;
  readonly __wbg_set_costcalculationinput_profitable_multiplier: (a: number, b: number) => void;
  readonly __wbg_get_costcalculationinput_external_call_len: (a: number, b: number) => void;
  readonly __wbg_set_costcalculationinput_external_call_len: (a: number, b: number, c: number) => void;
  readonly costcalculationinput_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => number;
  readonly costcalculationinput_calculate_sol_relative_price_with_profit: (a: number) => number;
  readonly costcalculationinput_calculate_recomended_claim_execution_fee: (a: number) => number;
  readonly costcalculationinput_calculate_recomended_reward_for_external_instruction: (a: number, b: number) => number;
  readonly costcalculationinput_calculate_recomended_reward_for_external_call: (a: number, b: number, c: number) => void;
  readonly __wbg_calculationerror_free: (a: number) => void;
  readonly externalinstructionwrapper_set_reward: (a: number, b: number) => void;
  readonly externalinstructionwrapper_reward: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4c6c1616b85e20a4: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h3878fb7d760359b2: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
