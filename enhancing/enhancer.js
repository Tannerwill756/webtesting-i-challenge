module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (
    typeof item.enhancement === "string" ||
    item.enhancement === undefined ||
    item.enhancement === null
  ) {
    return { ...item, enhancement: 0 };
  } else if (item.enhancement < 0) {
    return { ...item, enhancement: 0 };
  } else if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else if (item.enhancement > 20) {
    return { ...item, enhancement: 20 };
  } else if (item.enhancement === 20) {
    return { ...item, enhancement: item.enhancement };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
    } else {
      return { ...item, durability: item.durability - 10 };
    }
  }
}

function repair(item) {
  if (item.durability < 100 && item.durability >= 0) {
    return { ...item, durability: 100 };
  } else {
    throw "Durability can only be an integer between 0 and 100";
  }
}

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }
}
