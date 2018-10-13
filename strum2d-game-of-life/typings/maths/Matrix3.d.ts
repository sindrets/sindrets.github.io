/**
 * Describes the following column major 3x3 matrix:
 * m11  m21  m31
 * m12  m23  m32
 * m13  m23  m33
 */
export declare class Matrix3 {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;
    constructor(m11?: number, m12?: number, m13?: number, m21?: number, m22?: number, m23?: number, m31?: number, m32?: number, m33?: number);
    update(m11?: number, m12?: number, m13?: number, m21?: number, m22?: number, m23?: number, m31?: number, m32?: number, m33?: number): void;
    clone(): Matrix3;
    static getUniform(): Matrix3;
}
