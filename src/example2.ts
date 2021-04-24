/*
we can create an interface with the data and the types of attributes, so we don't need to pass individual arguments.
with typescript we always work with the object name and its attributes (types)
*/
interface UserData {
    id: string;
    name: string;
    email: string;
}

function registerUser({ id, name, email }: UserData) {
    console.log(id, name, email);
}

class RegisterManager {
    register(): void {
        registerUser('1234', 'Beatriz', 'beatriz@gmail.com');
    }
}
