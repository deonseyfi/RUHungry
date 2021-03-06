import { connect, disconnect } from 'mongoose';
import chalk from 'chalk';
import Item from '../server/items/item.model';
import User from '../server/users/user.model';
import { url } from '../server/config';

(async () => {
    try {
        await connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        const users = await User.find({});
        const items = await Item.find({});
        if (users.length === 0 && items.length === 0) {
            console.log(chalk.yellow('No users or items in the database, creating sample data...'));
            const user = new User({ name: 'Bob Bob', age: 50 });
            await user.save();
            console.log(chalk.green('Sample user successfully created!'));
            const newItems = [
                { name: 'Paper clip', value: 0.1 },
                { name: 'Colorful pen', value: 1.2 },
                { name: 'Notebook', value: 2.5 },
                { name: 'Soft eraser', value: 0.5 },
                { name: 'Table lamp', value: 5.1 },
            ];
            await Item.insertMany(newItems);
            console.log(chalk.green(`${newItems.length} item(s) successfully created!`));
        } else {
            console.log(chalk.yellow('Database already initiated, skipping populating script'));
        }
    } catch (error) {
        console.log(chalk.red(error));
    } finally {
        await disconnect();
    }
})();
