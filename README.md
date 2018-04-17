Live [http://139.162.157.78/](http://139.162.157.78/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

For production mode

### `yarn build`
### `serve -s build`

Tests

## `yarn test`
----------------
- Frontend Library -> Semantic UI React
- Graph Library -> Recharts
-----------------
##  If you have millions of viewers and interacting clients instead of hundreds what should you think to enable the continuous service in the above interface.

- Every successful company will meet with this problem one day.

# Answers
- Bad answer: more hardware
- Bad answer: more database
- Bad answer: micro optimization

- Good answer: software
- Better answer: Right software with cloud, macro optimization, caching

Let's look at the companies that have solved this problem before us.
- Google: Bigtable
- Amazon: DynamoDb, Redshift
- Netflix: Amazon (CloudSearch, DynamoDB, RDS, Web Services, EC2, Route 53), Apache (Cassandra, Groovy, Kafka, Solr, Lambda, Mesos)


- If a request can be answered without going to the database, do this. Use memcached or redis. Databases are always the biggest problem.
- If the problem is the processor, not the disk, switch to a compilable language. Go, Rust modern and new technologies are just about to pass by now. Not the whole system. The bottleneck must be detected and moved to a high-performance language.
- JS, CSS, Images send them all to CDN servers.
- Headers save lifes. For a correct cache, make sure that Expires, Cache-Control, ETag, Last-Modified are set correctly.
-Always do pagination.

```
Not this: https://jsonplaceholder.typicode.com/posts
This: https://jsonplaceholder.typicode.com/posts?start=1&end=10
Or do this: https://jsonplaceholder.typicode.com/posts?page=1
```

- If you do not really need synchronous processing, use a non-synchronous processing (Nodejs, Golang, Erlang)
- Use non-blocking operation. (Vert.x)
- If you are using an Apache server, get rid of it. One of the most successful programs written is NGINX. Use it.
