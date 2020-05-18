const Hello = () => 'Hello World';
console.log(Hello());

 const Add = (num1, num2) => {
   num1 = num1 * 2;
   num2 = num2 * 20;
   return num1 + num2;
 }
 console.log(Add(2,3));

 const getDataFromTable = (table, id) => {
  let params 
  let sql = `SELECT rowid AS id, *
   FROM ${table}`;
   if (id && id.length) {
     sql = `${sql} WHERE id = ?`;
     params = [id];
   }
   return SpeechRecognitionResult;
 };

 module.exports = {
   getDataFromTable,
 }