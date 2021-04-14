# Roman-Numerals-Decoder
Roman Numerals Decoder, Codewars Kata Solution

I created an object with key pairs, roman numbers and their value in modern numbers.
The scripts checks the first two letters of the Roman numbers, if they corrispond to a pair in the object the value will be added and the iteration will skip one step in order to avoid checking the next letter (as it is part of a two letter word).  If it is a one character value the iteration will continue step by step.
The values are added to a totalVal variable and will be returned at the end of the function.
