// Design and implement a data structure ( similar to cache ) in JavaScript
// to support the following mehtods

// get(key): Retrieve the value of the key if the key exists in the cache;
// otherwise, return null.

// put(key, value): Insert a key-value pair into the cache.
// If the cache reaches its capacity, it should automatically evict
// the least recently used item before inserting the new item.
// 5 Items

export const CacheStorage = () => {
  const cacheStorage = new Map();

  const get = (key) => {
    if (cacheStorage.has(key)) {
      const val = cacheStorage.get(key);
      cacheStorage.delete(key);
      cacheStorage.set(key, val);
      return cacheStorage.get(key);
    } else {
      return null;
    }
  };

  const put = (key, value) => {
    // const length = cacheStorage.set(key, value);
    const length = cacheStorage.size;
    if (length < 5) {
      cacheStorage.set(key, value);
    } else if (length >= 5) {
      const firstValue = cacheStorage.entries().next().value; // []
      cacheStorage.delete(firstValue[0]);
      cacheStorage.set(key, value);
    }
  };

  const getCache = () => cacheStorage;

  return { get, put, getCache };
};

// export default CacheStorage;
