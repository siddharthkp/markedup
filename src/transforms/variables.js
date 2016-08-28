let variables = (content, data) => {
    var re = /\${(.*?)}/g;
    let matches = content.match(re);

    if (!matches) return content;
    for (let match of matches) {
        let variable = match.substring(2).substring(0, match.length - 3);
        content = content.replace(match, data[variable]);
    }
    return content;
};

module.exports = variables;
