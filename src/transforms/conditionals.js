let transform = (content, data) => {
    let re = /<if((.|\n)*?)<endif>/g;
    let matches = content.match(re);

    if (!matches) return content;
    for (let match of matches) {
        let conditional = match.replace('<endif>', '');
        let parts = conditional.split('>');
        parts.pop();
        for (let part of parts) {
            let condition = part.match(/<(.*?):/g)[0];
            let text = part.replace(condition, '').replace(/  /g, '');
            if (isConditionValid(condition, data)) {
                content = content.replace(match, text);
                break;
            }
        }
    }
    return content;
};

let isConditionValid = (condition, data) => {
    if (condition.includes('<else:') || condition.includes('<else :')) return true;

    let variable = condition.match(/if (.*?)=/g)[0].split('if ')[1].split('=')[0].trim();
    let value = condition.match(/=(.*?):/g)[0].split('=')[1].split(':')[0].trim();
    value = value.substring(1).substring(0, value.length - 2);
    if (data[variable] == value) return true;
}

module.exports = transform;
