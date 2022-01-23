const blake2 = require("blake2");

const getBleake2bHashed = () => {
  const h = blake2.createKeyedHash(
    "blake2b",
    Buffer.from("key - up to 64 bytes for blake2b, 32 for blake2s")
  );
  h.update(Buffer.from("test"));
  console.log(h.digest("hex"));
};
