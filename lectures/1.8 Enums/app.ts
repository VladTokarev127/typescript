enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS,
	FAILED
}

const res = {
	message: 'Платёж успешен',
	statusCode: StatusCode.SUCCESS
};


// 1 - Успех
// 2 - В процессе
// 3 - Отклонён

if(res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);

const enum Roles {
	ADMIN,
	USER
}

const res2 = Roles.ADMIN;