    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
        <%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
        <%@ taglib prefix="tilesx" uri="http://tiles.apache.org/tags-tiles-extras" %>
        <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
        <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><tiles:getAsString name="title"/></title>

        <tilesx:useAttribute id="listCss" name="stylesheets" classname="java.util.List"/>
        <c:forEach var="item" items="${listCss}">
            <c:choose>
                <c:when test="${fn:indexOf(item, 'http') == 0}">
                    <link rel="stylesheet" href="${item}" media="all" />
                </c:when>
                <c:otherwise>
                    <link rel="stylesheet" href="${pageContext.request.contextPath}${item}" media="all" />
                </c:otherwise>
            </c:choose>
        </c:forEach>
        </head>
        <body>
        <!-- Header -->
        <tiles:insertAttribute name="header"/>

        <tiles:insertAttribute name="body" />

        <!-- Body -->

        <!-- Footer -->
        <tiles:insertAttribute name="footer"/>

        <tilesx:useAttribute id="listJs" name="scripts" classname="java.util.List"/>
        <c:forEach var="item" items="${listJs}">
            <c:choose>
                <c:when test="${fn:indexOf(item, 'http') == 0}">
                    <script src="${item}"></script>
                </c:when>
                <c:otherwise>
                    <script src="${pageContext.request.contextPath}${item}"></script>
                </c:otherwise>
            </c:choose>
        </c:forEach>
        </body>
        </html>