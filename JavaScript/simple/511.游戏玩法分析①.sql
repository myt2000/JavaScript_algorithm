SELECT
    player_id,
    event_date AS first_login
FROM
    (
        SELECT
            player_id,
            event_date,
            ROW_NUMBER() OVER(
                PARTITION BY player_id
                ORDER BY
                    event_date
            ) AS rn
        FROM
            Activity
    ) AS temp
WHERE
    rn = 1;

# leetcode最优解
# Write your MySQL query statement below
SELECT
    A.player_id,
    MIN(A.event_date) AS first_login
FROM
    Activity A
GROUP BY
    A.player_id;