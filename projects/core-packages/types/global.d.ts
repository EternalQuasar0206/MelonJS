// Console types
declare type ConsoleColor = import("./internal/console-types").ConsoleColor;
// Generic types
declare type Primitive = import("./internal/generic-types").Primitive;
declare type OutputFriendly = import("./internal/generic-types").OutputFriendly;
// System types
declare type InternalOSVersion = import("./internal/system-types").InternalOSVersion;
declare type Platform = import("./internal/system-types").Platform;
// Http types
declare type HttpComposedResponse = import ("./internal/http-types").HttpComposedResponse;
declare type HttpRequest = import ("./internal/http-types").HttpRequest;
declare type CorsOptions = import ("./internal/http-types").CorsOptions;
declare type CallbackFunction = import ("./internal/http-types").CallbackFunction;
declare type AsyncCallbackFunction = import ("./internal/http-types").AsyncCallbackFunction
// Dotnet interoperability types
declare type InteropMethod<T> = import ("./internal/dotnet-interop-types").InteropMethod<T>;
declare type DotnetFetchExpression = import ("./internal/dotnet-interop-types").DotnetFetchExpression;
declare type DotnetGetStaticMethodResult<T> = import ("./internal/dotnet-interop-types").DotnetGetStaticMethodResult<T>;
declare type DotnetInstanceExpression = import ("./internal/dotnet-interop-types").DotnetInstanceExpression;
declare type DotnetNumericTypes = import ("./internal/dotnet-interop-types").DotnetNumericTypes
declare type TypedNumber = import ("./internal/dotnet-interop-types").TypedNumber
// Database types
declare type DatabaseProviderInternal = import ("./internal/database-types").DatabaseProviderInternal;
declare type DatabaseProviderOptions = import ("./internal/database-types").DatabaseProviderOptions;

// Structural types
declare type MelonStandardApi = {
    console: {
        log: import ("./structural/console-structural-types").ConsoleLog,
        write: import ("./structural/console-structural-types").ConsoleWrite,
        writeLine: import ("./structural/console-structural-types").ConsoleWriteLine,
        warn: import ("./structural/console-structural-types").ConsoleWarning,
        error: import ("./structural/console-structural-types").ConsoleError,
        table: import ("./structural/console-structural-types").ConsoleTable,
        time: import ("./structural/console-structural-types").ConsoleTime,
        timeEnd: import ("./structural/console-structural-types").ConsoleTimeEnd,
    },
    data: {
        clone: import ("./structural/data-structural-types").DataClone,
        compare: import ("./structural/data-structural-types").DataCompare,
        PgClient: import ("./structural/data-structural-types").DataMySqlClient,
        MySqlClient: import ("./structural/data-structural-types").DataPgClient,
        SqlServer: import ("./structural/data-structural-types").DataSqlServerClient,
        PgDocumentClient: import ("./structural/data-structural-types").DataPgDocumentClient
    },
    guards: {
        number: {
            isEven(target: number): boolean,
            isOdd(target: number): boolean,
            isInteger(target: number): boolean,
            isFloat(target: number): boolean,
        },
        iterable: {
            isEmptyArray(target: any[]): boolean,
            isEmptyObject(target: Object): boolean
        },
        string: {
            isNullOrEmpty(target: string): boolean,
            isNullOrWhiteSpace(target: string): boolean,
        }
    },
    fs: {
        readText: import("./structural/fs-structural-types").FsReadText,
        writeText: import("./structural/fs-structural-types").FsWriteText,
        readBytes: import("./structural/fs-structural-types").FsReadBytes,
        writeBytes: import("./structural/fs-structural-types").FsWriteBytes,
        readTextAsync: import("./structural/fs-structural-types").FsReadTextAsync,
        writeTextAsync: import("./structural/fs-structural-types").FsWriteTextAsync,
        readBytesAsync: import("./structural/fs-structural-types").FsReadBytesAsync,
        writeBytesAsync: import("./structural/fs-structural-types").FsWriteBytesAsync,
        deleteFile: import("./structural/fs-structural-types").FsDeleteFile,
        deleteFileAsync: import("./structural/fs-structural-types").FsDeleteFileAsync,
        moveFile: import("./structural/fs-structural-types").FsMoveFile,
        moveFileAsync: import("./structural/fs-structural-types").FsMoveFileAsync,
        copyFile: import("./structural/fs-structural-types").FsCopyFile,
        copyFileAsync: import("./structural/fs-structural-types").FsCopyFileAsync,
        renameFile: import("./structural/fs-structural-types").FsRenameFile,
        renameFileAsync: import("./structural/fs-structural-types").FsRenameFileAsync,
        createDirectory: import("./structural/fs-structural-types").FsCreateDirectory,
        createDirectoryAsync: import("./structural/fs-structural-types").FsCreateDirectoryAsync,
        deleteDirectory: import("./structural/fs-structural-types").FsDeleteDirectory,
        deleteDirectoryAsync: import("./structural/fs-structural-types").FsDeleteDirectoryAsync,
        renameDirectory: import("./structural/fs-structural-types").FsRenameDirectory,
        renameDirectoryAsync: import("./structural/fs-structural-types").FsRenameDirectoryAsync
    }
}

declare const Melon: MelonStandardApi;