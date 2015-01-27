-module(config).
-compile(export_all).

log_modules() -> 
    [
        index
    ].

info() -> spawn(fun() -> wf:info(index, "~p", [mnesia:info()]) end).