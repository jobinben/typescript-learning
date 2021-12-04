// 类型声明文件

// 声明模块
declare module 'lodash' {
    export function join(arr: any[]): void
}

// 声明 变量、函数、类
declare let myName: string
declare let myAge: number

declare function getGender(gender: string): void

declare class Person {
    name: string
    age: number
    constructor(name: string, age: number) { 
    }
}

// 声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

// 声明命名空间
declare namespace $ {
    export function ajax(settings: any): any
}