---
tags:
  - DataCompression
  - Algorithms
  - InformationTheory
  - LosslessCompression
  - EncodingTechniques
  - public
aliases:
  - Huffman Encoding
  - Huffman Algorithm
CMDS:
  - "[[📚 013 Terminologies]]"
date_created: 2024-10-16
---
## Huffman Coding
### What is Huffman Coding
- Background
	- Developed by David A. Huffman in 1952 while he was a Ph.D. student at MIT [(Huffman, 1952)](https://ieeexplore.ieee.org/document/4051119)
	- Created as a more efficient alternative to other variable-length encoding schemes of the time
- Definition:
	- Huffman coding is a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency of occurrence [(Cormen et al., 2009)](https://mitpress.mit.edu/books/introduction-algorithms-third-edition)

	- It creates a binary tree (Huffman tree) where more frequent characters are assigned shorter codes and less frequent characters longer codes [(Sayood, 2017)](https://www.sciencedirect.com/book/9780128094747/introduction-to-data-compression)
	- The algorithm guarantees a prefix-free code, meaning no codeword is a prefix of another codeword [(Blelloch, 2013)](https://www.cs.cmu.edu/~guyb/realworld/compression.pdf)
- Practical uses:
	- Text compression in file compression utilities like zip and gzip [(Salomon & Motta, 2010)](https://www.springer.com/gp/book/9781846286025)
	- Image compression in formats like JPEG and PNG [(Salomon & Motta, 2010)](https://www.springer.com/gp/book/9781846286025)
	- Part of more complex compression algorithms like DEFLATE used in ZIP files [(Salomon & Motta, 2010)](https://www.springer.com/gp/book/9781846286025)
- Common Misconceptions
	- Huffman coding is not always the most efficient compression method for all types of data [(Sayood, 2017)](https://www.sciencedirect.com/book/9780128094747/introduction-to-data-compression)
	- It does not work well for sources with uniform symbol distribution [(Sayood, 2017)](https://www.sciencedirect.com/book/9780128094747/introduction-to-data-compression)

### Examples
#### Text Compression
- Consider the string "BCCABBDDAEE"
- Frequency: A(2), B(3), C(2), D(2), E(2)
- Huffman codes: A(00), B(1), C(01), D(100), E(101)
- Compressed binary: 1010110010010010110101
- Original: 11 characters * 8 bits = 88 bits
- Compressed: 22 bits, saving 75% space [(Cormen et al., 2009)](https://mitpress.mit.edu/books/introduction-algorithms-third-edition)

#### Image Compression
- In JPEG compression, Huffman coding is applied to the quantized DCT coefficients
- More frequent coefficients (often zeros) get shorter codes
- This contributes to JPEG's efficient compression of photographic images [(Salomon & Motta, 2010)](https://www.springer.com/gp/book/9781846286025)

## Literature Review
#### Huffman, 1952
- [A Method for the Construction of Minimum-Redundancy Codes](https://ieeexplore.ieee.org/document/4051119)
- Key points:
	- Introduces the Huffman coding algorithm
	- Proves that the algorithm produces an optimal prefix code
	- Demonstrates how to construct the Huffman tree

#### Cormen Et Al., 2009
- [Introduction to Algorithms, Third Edition](https://mitpress.mit.edu/books/introduction-algorithms-third-edition)
- Key points:
	- Provides a detailed explanation of the Huffman coding algorithm
	- Analyzes the time complexity of the algorithm
	- Proves the optimality of Huffman codes

## Related Concepts
- [[Lossless Compression]] #DataCompression
	- Huffman coding is a type of lossless compression, meaning the original data can be perfectly reconstructed from the compressed data
- [[Entropy Coding]] #InformationTheory
	- Huffman coding is a type of entropy coding, which aims to compress data close to its information-theoretic limit
- [[Shannon-Fano Coding]] #DataCompression
	- Another variable-length encoding scheme that predates Huffman coding but is generally less efficient


## 궁금증
- [[2024-10-17]] 23:28 최근에는 특히 adaptive models에서 Huffman Coding보다 arithmetic coding이 더 많이 사용됩니다. 그 이유는 adaptive 모델에서 기호의 확률이 지속적으로 업데이트되기 때문에, arithmetic coding이 더 효율적으로 연속적인 확률 분포를 처리할 수 있기 때문입니다. 반면, static Huffman은 정적 확률 분포에서 여전히 빠르고 효율적인 방식입니다.
