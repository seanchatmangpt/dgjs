class APIError extends Error {
    status: number;
    headers: Record<string, string>;

    constructor(message: string, status: number, headers: Record<string, string> = {}) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.headers = headers;
    }
}

class BadRequestError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 400, headers);
        this.name = 'BadRequestError';
    }
}

class AuthenticationError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 401, headers);
        this.name = 'AuthenticationError';
    }
}

class PermissionDeniedError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 403, headers);
        this.name = 'PermissionDeniedError';
    }
}

class NotFoundError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 404, headers);
        this.name = 'NotFoundError';
    }
}

class UnprocessableEntityError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 422, headers);
        this.name = 'UnprocessableEntityError';
    }
}

class RateLimitError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 429, headers);
        this.name = 'RateLimitError';
    }
}

class InternalServerError extends APIError {
    constructor(message: string, headers: Record<string, string> = {}) {
        super(message, 500, headers);
        this.name = 'InternalServerError';
    }
}

class APIConnectionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'APIConnectionError';
    }
}

class APIConnectionTimeoutError extends APIConnectionError {
    constructor(message: string) {
        super(message);
        this.name = 'APIConnectionTimeoutError';
    }
}

export {
    APIError,
    BadRequestError,
    AuthenticationError,
    PermissionDeniedError,
    NotFoundError,
    UnprocessableEntityError,
    RateLimitError,
    InternalServerError,
    APIConnectionError,
    APIConnectionTimeoutError,
};