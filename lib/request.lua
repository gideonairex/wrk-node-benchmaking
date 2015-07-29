request = function()
path = "/api/v1/legacy/sso/authenticate/url"
wrk.headers["Content-Type"] = "application/json; charset=utf-8"
wrk.headers["X-Engine-Id"] = "1dbae407-f228-4803-b1ef-89f6aaf1bb69"
wrk.headers["X-Engine-Secret"] = "YzM4NmY0MGU0YzAzOWIzMTc1NzgzMTI4ZmQzYTFkYzAwMzIyOGFjMTY2NmU4YTA2YTUzY2U0ZGRlNmU5ZWFjNg=="
wrk.headers["authorization"] = "BEARER MDJiYWVkZjQyMTUxNzM4NDUzZjk0NDRmMjZlMGU3MTU2NjZhNzc4MWVkMmFmOTdkMGI1YjgzYjNjZGE5MWNlZA=="
wrk.body = ""
return wrk.format("GET", path)
end