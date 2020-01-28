# Typescript

> Typescript = Javascript + **_A Type System_**

## Table of Contents

- [Typescript](#typescript)
  - [Table of Contents](#table-of-contents)
  - [Goals](#goals)
    - [Syntax + Features](#syntax--features)
    - [Design Patterns with TS](#design-patterns-with-ts)
  - [Advantages](#advantages)
  - [Commands](#commands)
    - [Run Typescript](#run-typescript)
  - [Steps](#steps)
    - [FetchJSON](#fetchjson)
    - [Type System](#type-system)
      - [Plain Definition + Overview](#plain-definition--overview)
      - [Why do we care?](#why-do-we-care)
      - [When to use this?](#when-to-use-this)
  - [Packages](#packages)

## Goals

### Syntax + Features

- Understand basic types in TS
- Function typing + annotations
- Type definition files
- Arrays in TS
- Modules Systems
- Classes + Refresher on OOP
- What is an interface?
- What is the syntax for defining an interface?

### Design Patterns with TS

- Projects
- How do we use interfaces to write reusable code?

## Advantages

- Helps us catch errors during development
- 👤 Uses 'type annotations' to analyze our code
- Only active during development
- ❌Doesn't provide any performance optimization

## Commands

- `tsc -v` -> Typescirpt Compiler

### Run Typescript

- Compile the file `tsc file.ts`
- Compile file is `file.js`. Run the file as `node file.js`

> ts-node will combile both the commands at the same time. So, we don't have to write command 2 times.

- Command - `ts-node file.ts`

## Steps

### FetchJSON

1. Make a network request to fetch some JSON and print the result
   How Typescript handles errors

### Type System

#### Plain Definition + Overview

Type - Easy way to refer to the different properties + functions that a value has.

#### Why do we care?

- To avoid errors
- increases redability of the code

#### When to use this?

- Everywhere, Any value which is declared has a type associated with it.

## Packages

- typescript
- ts-node
