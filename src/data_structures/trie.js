class TrieNode {
  constructor() {
    this.words = [];
    this.children = {};
  }
}

class Trie {
  constructor(words, buildCode, Node=TrieNode) {
    this.Node = Node;
    this.buildCode = buildCode;
    this._root = new this.Node();
    this._count = 0;
    words.forEach(word => this.addWord(word));
  }

  addWord(word) {
    const code = this.buildCode(word);

    let node = this._root;

    for (let radix in code) {
      if (node.children[radix] === undefined) {
        node.children[radix] = new TrieNode();
      } 
      node = node.children[radix];
      
    }

    if (!node.words.includes(word)) {
      node.words.push(word);
      this._count += 1;
    }
  }

  lookupCode(code) {
    let node = this._root;

    for (let radix in code) {
      node = node.children[radix];

      if (node === undefined) {
        return [];
      }
    }

    return node.words;
  }

  lookupPrefix(codePrefix) {
  }

  count() {
    return this._count;
  }
}

export default Trie;