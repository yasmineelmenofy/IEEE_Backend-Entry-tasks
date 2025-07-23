SELECT *
FROM products
WHERE BINARY description REGEXP '(^|[^A-Za-z0-9])SN[0-9]{4}-[0-9]{4}([^0-9]|$)'
ORDER BY product_id;
