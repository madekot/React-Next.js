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

interface Info {
  desc: string;
  isActive: boolean;
}

interface Tag {
  name: string;
  value: number;
}

interface Reply {
  userId: string;
  id: string;
  title: string;
  info: Info;
  tags: Tag[];
}
