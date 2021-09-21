function formatDate (String){
    const date = new Date(String);

    return date.toLocaleDateString();

};
module.exports = formatDate;