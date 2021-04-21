function registerUser(id, name, email) {
    console.log(id, name, email);
}

class registerManager {
    register() {
        registerUser('123', 'Beatriz', 'beatriz@gmail.com');
    }
}

// the type is String, but no error occurs, because we are not deciding the type.
class RegisterSeller {
    register() {
        registerUser(12345, 'Homero', 'homero@gmail.com');
    }
}
