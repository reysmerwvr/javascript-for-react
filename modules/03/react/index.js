function component(strings, ...dynamicValues) {
  return function (props) {
    let newContent = strings.slice();
    console.log(newContent);
    dynamicValues.forEach((element, index) => {
      newContent[index] += props[element];
    });
    return newContent.join();
  };
};

export { component };