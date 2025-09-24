/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let stringArray = sentence.split(" ");
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
        let word = stringArray[i];
        let newWord = '';
        if (vowel.includes(word[0].toLowerCase())) {
            newWord = word + 'ma' + 'a'.repeat(i + 1);
        }
        else {
            newWord = word.slice(1) + word[0] + 'ma' + 'a'.repeat(i + 1);
        }
        result.push(newWord);
    }
    return result.join(' ');
};

// 第二种方式
function toGoatLatin(sentence) {
    // 定义元音集合
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // 将句子按空格分割成单词数组
    const words = sentence.split(' ');

    // 处理每个单词
    const resultWords = words.map((word, index) => {
        let newWord = word;
        if (vowels.has(word[0])) {
            // 以元音开头
            newWord += 'ma';
        } else {
            // 以辅音开头
            newWord = word.slice(1) + word[0] + 'ma';
        }
        // 添加与索引相同数量的 'a'
        newWord += 'a'.repeat(index + 1);
        return newWord;
    });

    // 将处理后的单词重新组合成一个句子
    return resultWords.join(' ');
}


console.log(toGoatLatin("I speak Goat Latin"));

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));

/**
 * 给你一个由若干单词组成的句子 sentence ，单词间由空格分隔。每个单词仅由大写和小写英文字母组成。

请你将句子转换为 “山羊拉丁文（Goat Latin）”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。山羊拉丁文的规则如下：

如果单词以元音开头（'a', 'e', 'i', 'o', 'u'），在单词后添加"ma"。
例如，单词 "apple" 变为 "applema" 。
如果单词以辅音字母开头（即，非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。
例如，单词 "goat" 变为 "oatgma" 。
根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从 1 开始。
例如，在第一个单词后添加 "a" ，在第二个单词后添加 "aa" ，以此类推。
返回将 sentence 转换为山羊拉丁文后的句子。

 

示例 1：

输入：sentence = "I speak Goat Latin"
输出："Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
示例 2：

输入：sentence = "The quick brown fox jumped over the lazy dog"
输出："heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 
 * 
*/