///<reference path="./classes.d.ts" />
declare namespace assert {
	export function ok( actual: Value, msg: string );
	export function notOk( actual: Value, msg: string );
	export function equal( actual: Value, expected: Value, msg: string );
	export function notEqual( actual: Value, expected: Value, msg: string );
	export function strictEqual( actual: Value, expected: Value, msg: string );
	export function notStrictEqual( actual: Value, expected: Value, msg: string );
	export function deepEqual( actual: Value, expected: Value, msg: string );
	export function notDeepEqual( actual: Value, expected: Value, msg: string );
	export function closeTo( actual: Value, expected: Value, delta: Value, msg: string );
	export function notCloseTo( actual: Value, expected: Value, delta: Value, msg: string );
}