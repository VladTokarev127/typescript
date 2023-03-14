enum PaymentStatus {
	Success = 'success',
	Failed = 'failed'
}

interface PaymentInfo {
	sum: number,
	from: number,
	to: number
}

interface PaymentSuccess extends PaymentInfo {
	databaseId: number;
}

interface PaymentFailed {
	errorMessage: string;
	errorCode: number;
}

interface ResponseSuccess {
	status: PaymentStatus.Success;
	data: PaymentSuccess
}

interface ResponseFailed {
	status: PaymentStatus.Failed;
	data: PaymentFailed
}

const payment: PaymentInfo = {
	sum: 10000,
	from: 2,
	to: 4
}