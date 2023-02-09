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
