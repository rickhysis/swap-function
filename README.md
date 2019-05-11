# Swap Function
Swap variables in function. Swap , the act of swapping two variables refers to mutually exchanging the values of the variables. Usually, this is done with the data in memory. For example, in a program, two variables. 

## Installation
To install, you can use npm or yarn:

```
npm install swap-function

or

yarn add swap-function
```

## Usage

Swap variables using temporary buffer
```
import {buf} from 'swap-function'

const [x, y] = buf(3, 2)
```
Swap variables using addition and subtraction.
```
import {addsub} from 'swap-function'

const [x, y] = addsub(3, 2)
```
Swap variables using XOR
```
import {xor} from 'swap-function'

const [x, y] = xor(3, 2)
```
Swap individual bits using XOR.
```
import {xor} from 'swap-function'

const [x, y] = bitsXor(3, 2. '0011')
```

## License
MIT © Rickhy Siswanto.
