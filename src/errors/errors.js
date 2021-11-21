class ConfigNotCorrect extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'UserError';
    this.code = code;
    this.isUserError = true;
  }
};

class ConfigMissing extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'UserError';
    this.code = code;
    this.isUserError = true;
  }
};

class DuplicateArguments extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'UserError';
    this.code = code;
    this.isUserError = true;
  }
};

class PipelineStreamsError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "Pipeline streams error!";
    this.code = code;
    this.isUserError = true;
  }
}


module.exports = {
  ConfigNotCorrect,
  ConfigMissing,
  DuplicateArguments,
  PipelineStreamsError
};