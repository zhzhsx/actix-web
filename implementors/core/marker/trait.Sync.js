(function() {var implementors = {};
implementors["actix_files"] = [{"text":"impl Sync for Directory","synthetic":true,"types":[]},{"text":"impl !Sync for Files","synthetic":true,"types":[]},{"text":"impl Sync for NamedFile","synthetic":true,"types":[]},{"text":"impl Sync for HttpRange","synthetic":true,"types":[]},{"text":"impl !Sync for FilesService","synthetic":true,"types":[]}];
implementors["actix_http"] = [{"text":"impl Sync for BodySize","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for ResponseBody&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Body","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for BodyStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for SizedStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, S, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Sync for HttpServiceBuilder&lt;T, S, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Sync for Connector&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ConnectError","synthetic":true,"types":[]},{"text":"impl Sync for InvalidUrl","synthetic":true,"types":[]},{"text":"impl !Sync for SendRequestError","synthetic":true,"types":[]},{"text":"impl Sync for FreezeRequestError","synthetic":true,"types":[]},{"text":"impl Sync for Protocol","synthetic":true,"types":[]},{"text":"impl Sync for Connect","synthetic":true,"types":[]},{"text":"impl Sync for KeepAlive","synthetic":true,"types":[]},{"text":"impl !Sync for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for Decoder&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for Encoder&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Extensions","synthetic":true,"types":[]},{"text":"impl Sync for AcceptCharset","synthetic":true,"types":[]},{"text":"impl Sync for Accept","synthetic":true,"types":[]},{"text":"impl Sync for AcceptLanguage","synthetic":true,"types":[]},{"text":"impl Sync for Allow","synthetic":true,"types":[]},{"text":"impl Sync for CacheControl","synthetic":true,"types":[]},{"text":"impl Sync for CacheDirective","synthetic":true,"types":[]},{"text":"impl Sync for DispositionType","synthetic":true,"types":[]},{"text":"impl Sync for DispositionParam","synthetic":true,"types":[]},{"text":"impl Sync for ContentDisposition","synthetic":true,"types":[]},{"text":"impl Sync for ContentLanguage","synthetic":true,"types":[]},{"text":"impl Sync for ContentRange","synthetic":true,"types":[]},{"text":"impl Sync for ContentRangeSpec","synthetic":true,"types":[]},{"text":"impl Sync for ContentType","synthetic":true,"types":[]},{"text":"impl Sync for Date","synthetic":true,"types":[]},{"text":"impl Sync for ETag","synthetic":true,"types":[]},{"text":"impl Sync for Expires","synthetic":true,"types":[]},{"text":"impl Sync for IfMatch","synthetic":true,"types":[]},{"text":"impl Sync for IfModifiedSince","synthetic":true,"types":[]},{"text":"impl Sync for IfNoneMatch","synthetic":true,"types":[]},{"text":"impl Sync for IfRange","synthetic":true,"types":[]},{"text":"impl Sync for IfUnmodifiedSince","synthetic":true,"types":[]},{"text":"impl Sync for LastModified","synthetic":true,"types":[]},{"text":"impl Sync for HeaderMap","synthetic":true,"types":[]},{"text":"impl Sync for ContentEncoding","synthetic":true,"types":[]},{"text":"impl Sync for ExtendedValue","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionType","synthetic":true,"types":[]},{"text":"impl !Sync for RequestHead","synthetic":true,"types":[]},{"text":"impl !Sync for RequestHeadType","synthetic":true,"types":[]},{"text":"impl !Sync for ResponseHead","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Message&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Sync for Payload&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Sync for Request&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !Sync for Response&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ResponseBuilder","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Sync for HttpService&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for ParseError","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for BlockingError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for PayloadError","synthetic":true,"types":[]},{"text":"impl !Sync for DispatchError","synthetic":true,"types":[]},{"text":"impl Sync for ContentTypeError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for InternalError&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ClientCodec","synthetic":true,"types":[]},{"text":"impl !Sync for ClientPayloadCodec","synthetic":true,"types":[]},{"text":"impl !Sync for Codec","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !Sync for Dispatcher&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ExpectHandler","synthetic":true,"types":[]},{"text":"impl !Sync for Payload","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Sync for H1Service&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !Sync for H1ServiceHandler&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl Sync for UpgradeHandler","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; !Sync for SendResponse&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Message&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MessageType","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !Sync for Dispatcher&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B&gt; !Sync for H2Service&lt;T, S, B&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Payload","synthetic":true,"types":[]},{"text":"impl !Sync for TestRequest","synthetic":true,"types":[]},{"text":"impl Sync for TestBuffer","synthetic":true,"types":[]},{"text":"impl !Sync for TestSeqBuffer","synthetic":true,"types":[]},{"text":"impl Sync for TestSeqInner","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for Frame","synthetic":true,"types":[]},{"text":"impl Sync for Item","synthetic":true,"types":[]},{"text":"impl Sync for Codec","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; !Sync for Dispatcher&lt;S, T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Parser","synthetic":true,"types":[]},{"text":"impl Sync for OpCode","synthetic":true,"types":[]},{"text":"impl Sync for CloseCode","synthetic":true,"types":[]},{"text":"impl Sync for CloseReason","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolError","synthetic":true,"types":[]},{"text":"impl Sync for HandshakeError","synthetic":true,"types":[]},{"text":"impl Sync for Protocol","synthetic":true,"types":[]}];
implementors["actix_http_test"] = [{"text":"impl !Sync for TestServer","synthetic":true,"types":[]}];
implementors["actix_multipart"] = [{"text":"impl Sync for MultipartError","synthetic":true,"types":[]},{"text":"impl !Sync for Multipart","synthetic":true,"types":[]},{"text":"impl !Sync for Field","synthetic":true,"types":[]}];
implementors["actix_web"] = [{"text":"impl&lt;T, B&gt; !Sync for App&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for AppService","synthetic":true,"types":[]},{"text":"impl !Sync for AppConfig","synthetic":true,"types":[]},{"text":"impl !Sync for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Sync for Data&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for UrlGenerationError","synthetic":true,"types":[]},{"text":"impl Sync for UrlencodedError","synthetic":true,"types":[]},{"text":"impl Sync for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl Sync for PathError","synthetic":true,"types":[]},{"text":"impl Sync for QueryPayloadError","synthetic":true,"types":[]},{"text":"impl Sync for ReadlinesError","synthetic":true,"types":[]},{"text":"impl !Sync for AnyGuard","synthetic":true,"types":[]},{"text":"impl !Sync for AllGuard","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionInfo","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Compat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for DefaultHeaders","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for ErrorHandlerResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for ErrorHandlers&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Logger","synthetic":true,"types":[]},{"text":"impl Sync for TrailingSlash","synthetic":true,"types":[]},{"text":"impl Sync for NormalizePath","synthetic":true,"types":[]},{"text":"impl Sync for Compress","synthetic":true,"types":[]},{"text":"impl !Sync for HttpRequest","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ReqData&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ResourceEndpoint&gt; !Sync for Resource&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ResourceMap","synthetic":true,"types":[]},{"text":"impl !Sync for Route","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ScopeEndpoint&gt; !Sync for Scope&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, I, S, B&gt; !Sync for HttpServer&lt;F, I, S, B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ServiceRequest","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !Sync for ServiceResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for WebService","synthetic":true,"types":[]},{"text":"impl !Sync for TestRequest","synthetic":true,"types":[]},{"text":"impl Sync for TestServerConfig","synthetic":true,"types":[]},{"text":"impl !Sync for TestServer","synthetic":true,"types":[]},{"text":"impl&lt;L, R&gt; Sync for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L, R&gt; !Sync for EitherExtractError&lt;L, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Form&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for FormConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for UrlEncoded&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Json&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for JsonConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for JsonBody&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for PathConfig","synthetic":true,"types":[]},{"text":"impl !Sync for Payload","synthetic":true,"types":[]},{"text":"impl Sync for PayloadConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Query&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for QueryConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Readlines&lt;T&gt;","synthetic":true,"types":[]}];
implementors["actix_web_actors"] = [{"text":"impl&lt;A&gt; !Sync for HttpContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for WebsocketContext&lt;A&gt;","synthetic":true,"types":[]}];
implementors["awc"] = [{"text":"impl !Sync for ClientBuilder","synthetic":true,"types":[]},{"text":"impl !Sync for BoxedSocket","synthetic":true,"types":[]},{"text":"impl !Sync for WsClientError","synthetic":true,"types":[]},{"text":"impl Sync for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl !Sync for FrozenClientRequest","synthetic":true,"types":[]},{"text":"impl !Sync for FrozenSendBuilder","synthetic":true,"types":[]},{"text":"impl !Sync for ClientRequest","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Sync for ClientResponse&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Sync for MessageBody&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S, U&gt; !Sync for JsonBody&lt;S, U&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for SendClientRequest","synthetic":true,"types":[]},{"text":"impl !Sync for TestResponse","synthetic":true,"types":[]},{"text":"impl !Sync for WebsocketsRequest","synthetic":true,"types":[]},{"text":"impl !Sync for Client","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()