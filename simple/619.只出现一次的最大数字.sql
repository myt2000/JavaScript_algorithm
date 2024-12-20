-- MyNumbers 表：
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | num         | int  |
-- +-------------+------+
-- 该表可能包含重复项（换句话说，在SQL中，该表没有主键）。
-- 这张表的每一行都含有一个整数。
-- 单一数字 是在 MyNumbers 表中只出现一次的数字。
-- 找出最大的 单一数字 。如果不存在 单一数字 ，则返回 null 。
-- 查询结果如下例所示。
-- 示例 1：
-- 输入：
-- MyNumbers 表：
-- +-----+
-- | num |
-- +-----+
-- | 8   |
-- | 8   |
-- | 3   |
-- | 3   |
-- | 1   |
-- | 4   |
-- | 5   |
-- | 6   |
-- +-----+
-- 输出：
-- +-----+
-- | num |
-- +-----+
-- | 6   |
-- +-----+
-- 解释：单一数字有 1、4、5 和 6 。
-- 6 是最大的单一数字，返回 6 。
-- 示例 2：
-- 输入：
-- MyNumbers table:
-- +-----+
-- | num |
-- +-----+
-- | 8   |
-- | 8   |
-- | 7   |
-- | 7   |
-- | 3   |
-- | 3   |
-- | 3   |
-- +-----+
-- 输出：
-- +------+
-- | num  |
-- +------+
-- | null |
-- +------+
-- 解释：输入的表中不存在单一数字，所以返回 null 。
SELECT
    IF(COUNT(num) = 1, num, NULL) AS num
FROM
    MyNumbers
GROUP BY
    num
ORDER BY
    COUNT(num),
    num DESC
LIMIT
    1;

# leetcode最优解
select
    max(num) as num
from
    mynumbers
where
    num in (
        select
            num
        from
            mynumbers
        group by
            num
        having
            count(num) = 1
    );