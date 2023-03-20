abstract class Logger {
	abstract log(message: string): void;
	
	printDate(date: Date) {
		this.log(date.toString());
	}
}

class NewLogger extends Logger {
	log(message: string): void {
		console.log(message);
	}

	logWithDate(message: string) {
		this.printDate(new Date());
		this.log(message);
	}
}

const logger = new NewLogger();
logger.logWithDate('Сообщение');