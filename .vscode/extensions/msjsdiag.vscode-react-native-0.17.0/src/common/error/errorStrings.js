"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_STRINGS = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
const nls = require("vscode-nls");
const internalErrorCode_1 = require("./internalErrorCode");
const localize = nls.loadMessageBundle(__filename);
exports.ERROR_STRINGS = {
    [internalErrorCode_1.InternalErrorCode.CommandFailed]: localize(0, null),
    [internalErrorCode_1.InternalErrorCode.CommandFailedWithErrorCode]: localize(1, null),
    [internalErrorCode_1.InternalErrorCode.ExpectedIntegerValue]: localize(2, null),
    [internalErrorCode_1.InternalErrorCode.PackagerStartFailed]: localize(3, null),
    [internalErrorCode_1.InternalErrorCode.IOSDeployNotFound]: localize(4, null),
    [internalErrorCode_1.InternalErrorCode.DeviceNotPluggedIn]: localize(5, null),
    [internalErrorCode_1.InternalErrorCode.DeveloperDiskImgNotMountable]: localize(6, null),
    [internalErrorCode_1.InternalErrorCode.UnableToLaunchApplication]: localize(7, null),
    [internalErrorCode_1.InternalErrorCode.ApplicationLaunchTimedOut]: localize(8, null),
    [internalErrorCode_1.InternalErrorCode.IOSSimulatorNotLaunchable]: localize(9, null),
    [internalErrorCode_1.InternalErrorCode.OpnPackagerLocationNotFound]: localize(10, null),
    [internalErrorCode_1.InternalErrorCode.OpnPackagerNotFound]: localize(11, null),
    [internalErrorCode_1.InternalErrorCode.PackageNotFound]: localize(12, null),
    [internalErrorCode_1.InternalErrorCode.PlatformNotSupported]: localize(13, null),
    [internalErrorCode_1.InternalErrorCode.ProjectVersionNotParsable]: localize(14, null),
    [internalErrorCode_1.InternalErrorCode.ProjectVersionUnsupported]: localize(15, null),
    [internalErrorCode_1.InternalErrorCode.CouldNotFindProjectVersion]: localize(16, null),
    [internalErrorCode_1.InternalErrorCode.ProjectVersionNotReadable]: localize(17, null),
    [internalErrorCode_1.InternalErrorCode.TelemetryInitializationFailed]: localize(18, null),
    [internalErrorCode_1.InternalErrorCode.ExtensionActivationFailed]: localize(19, null),
    [internalErrorCode_1.InternalErrorCode.DebuggerStubLauncherFailed]: localize(20, null),
    [internalErrorCode_1.InternalErrorCode.IntellisenseSetupFailed]: localize(21, null),
    [internalErrorCode_1.InternalErrorCode.NodeDebuggerConfigurationFailed]: localize(22, null),
    [internalErrorCode_1.InternalErrorCode.FailedToStopPackagerOnExit]: localize(23, null),
    [internalErrorCode_1.InternalErrorCode.FailedToRunOnAndroid]: localize(24, null),
    [internalErrorCode_1.InternalErrorCode.FailedToRunOnIos]: localize(25, null),
    [internalErrorCode_1.InternalErrorCode.FailedToRunExponent]: localize(26, null),
    [internalErrorCode_1.InternalErrorCode.FailedToPublishToExpHost]: localize(27, null),
    [internalErrorCode_1.InternalErrorCode.FailedToStartPackager]: localize(28, null),
    [internalErrorCode_1.InternalErrorCode.FailedToStopPackager]: localize(29, null),
    [internalErrorCode_1.InternalErrorCode.FailedToRestartPackager]: localize(30, null),
    [internalErrorCode_1.InternalErrorCode.DebuggingFailed]: localize(31, null),
    [internalErrorCode_1.InternalErrorCode.DebuggingFailedInNodeWrapper]: localize(32, null),
    [internalErrorCode_1.InternalErrorCode.RNTempFolderDeletionFailed]: localize(33, null),
    [internalErrorCode_1.InternalErrorCode.CouldNotFindLocationOfNodeDebugger]: localize(34, null),
    [internalErrorCode_1.InternalErrorCode.CouldNotFindWorkspace]: localize(35, null),
    [internalErrorCode_1.InternalErrorCode.ReactNativePackageIsNotInstalled]: localize(36, null),
    [internalErrorCode_1.InternalErrorCode.ReactNativeWindowsIsNotInstalled]: localize(37, null),
    [internalErrorCode_1.InternalErrorCode.PackagerRunningInDifferentPort]: localize(38, null),
    [internalErrorCode_1.InternalErrorCode.ErrorWhileProcessingMessageInIPMSServer]: localize(39, null),
    [internalErrorCode_1.InternalErrorCode.ErrorNoPipeFound]: localize(40, null),
    [internalErrorCode_1.InternalErrorCode.NotAllSuccessPatternsMatched]: localize(41, null),
    [internalErrorCode_1.InternalErrorCode.CouldNotParsePackageVersion]: localize(42, null),
    [internalErrorCode_1.InternalErrorCode.UnsupportedCommandStatus]: localize(43, null),
    [internalErrorCode_1.InternalErrorCode.ExpectedExponentTunnelPath]: localize(44, null),
    [internalErrorCode_1.InternalErrorCode.WorkspaceNotFound]: localize(45, null),
    [internalErrorCode_1.InternalErrorCode.RNVersionNotSupportedByExponent]: localize(46, null),
    [internalErrorCode_1.InternalErrorCode.UserCancelledExpoLogin]: localize(47, null),
    [internalErrorCode_1.InternalErrorCode.CannotAttachToPackagerCheckPackagerRunningOnPort]: localize(48, null),
    [internalErrorCode_1.InternalErrorCode.AnotherDebuggerConnectedToPackager]: localize(49, null),
    [internalErrorCode_1.InternalErrorCode.NotInReactNativeFolderError]: localize(50, null),
    [internalErrorCode_1.InternalErrorCode.SourcesStoragePathIsNullOrEmpty]: localize(51, null),
    [internalErrorCode_1.InternalErrorCode.AndroidCouldNotInstallTheAppOnAnyAvailibleDevice]: localize(52, null),
    [internalErrorCode_1.InternalErrorCode.AndroidShellCommandTimedOut]: localize(53, null),
    [internalErrorCode_1.InternalErrorCode.AndroidProjectNotFound]: localize(54, null),
    [internalErrorCode_1.InternalErrorCode.AndroidMoreThanOneDeviceOrEmulator]: localize(55, null),
    [internalErrorCode_1.InternalErrorCode.AndroidFailedToLaunchTheSpecifiedActivity]: localize(56, null),
    [internalErrorCode_1.InternalErrorCode.IOSFoundMoreThanOneExecutablesCleanupBuildFolder]: localize(57, null),
    [internalErrorCode_1.InternalErrorCode.IOSCouldNotFoundExecutableInFolder]: localize(58, null),
    [internalErrorCode_1.InternalErrorCode.WinRNMPPluginIsNotInstalled]: localize(59, null),
    [internalErrorCode_1.InternalErrorCode.ReactDevtoolsIsNotInstalled]: localize(60, null),
    [internalErrorCode_1.InternalErrorCode.DebuggingWontWorkReloadJSAndReconnect]: localize(61, null),
    [internalErrorCode_1.InternalErrorCode.ReconnectionToPackagerFailedCheckForErrorsOrRestartReactNative]: localize(62, null),
    [internalErrorCode_1.InternalErrorCode.FailedToProcessMessageFromReactNativeApp]: localize(63, null),
    [internalErrorCode_1.InternalErrorCode.FailedToPrepareJSRuntimeEnvironment]: localize(64, null),
    [internalErrorCode_1.InternalErrorCode.FailedToSendMessageToTheReactNativeApp]: localize(65, null),
    [internalErrorCode_1.InternalErrorCode.ReactNativeWorkerProcessThrownAnError]: localize(66, null),
    [internalErrorCode_1.InternalErrorCode.CouldntImportScriptAt]: localize(67, null),
    [internalErrorCode_1.InternalErrorCode.RNMessageWithMethodExecuteApplicationScriptDoesntHaveURLProperty]: localize(68, null),
};

//# sourceMappingURL=errorStrings.js.map
