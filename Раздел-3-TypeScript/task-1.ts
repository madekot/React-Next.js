// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"info": {
// 		"desc": "delectus aut autem",
// 		"isActive": true
// 	},
// 	"tags": [
// 		{
// 			"name": "my name",
// 			"value": 1000
// 		}
// 	]
// }

interface innerTest1 {
  desc: string;
  isActive: boolean;
}

interface innerTest2 {
  name: string;
  value: number;
}

interface Test1 {
  userId: number;
  id: number;
  title: string;
  info: innerTest1;
  tags: innerTest2;
}
