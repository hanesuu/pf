<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>유디페이 리셀러 홈페이지</title>
    <meta name="description" content="외주 개발의 새로운 패러다임, 유디페이 리셀러">
    <meta property="og:type" content="website">
    <meta property="og:title" content="외주 개발의 새로운 패러다임, 유디페이 리셀러">
    <meta property="og:description" content="판매점을 유치하고, 저렴한 공급가로 제공되는 API에 마진을 설정하여 부가수익을 얻을 수 있습니다.">
    <meta property="og:site_name" content="외주 개발의 새로운 패러다임, 유디페이 리셀러">
    <meta property="og:image" content="/pf/pf_ud/udpay/common/img/link_thumb_rs.png">
    <meta property="og:url" content="https://udpayreseller.com/">
    <link rel="canonical" href="https://udpayreseller.com/">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="유디페이 리셀러,리셀러,결제API,부가API,API,API연동,쇼핑몰개발,솔루션개발,부가수익">

    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <!-- IE최신버전으로 보기 -->

    <meta name="naver-site-verification" content="ecb884da6a5d913681a577228e08385a7e1971f8" />
    <meta name="google-site-verification" content="mww0BVXII-2WTUgHyer_LVCE1NPtBnQ7ZpNgQe-7eiE" />

    <link rel="shortcut icon" type="image/x-icon" href="/pf/pf_ud/udpay/common/img/favicon.ico">
    <link rel="icon" href="/pf/pf_ud/udpay/common/img/favicon-32x32.png" sizes="32x32">

    <link rel="stylesheet" type="text/css" href="/pf/pf_ud/common/css/aos.css"/>
    <link rel="stylesheet" type="text/css" href="/pf/pf_ud/common/css/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="/pf/pf_ud/common/css/owl.theme.default.min.css"/>
    <link rel="stylesheet" type="text/css" href="/pf/pf_ud/udpay/hp_v2/assets/css/index.css">
    
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="/pf/pf_ud/common/js/aos.js"></script>
    <script src="/pf/pf_ud/common/js/owl.carousel.min.js"></script>
    <script defer src="/pf/pf_ud/udpay/hp_v2/js/tabmenu.js" charset="utf-8"></script>
    <script defer src="/pf/pf_ud/udpay/hp_v2/js/style.js" charset="utf-8"></script>
    <script defer src="/pf/pf_ud/udpay/hp_v2/js/guide.js" charset="utf-8"></script>
    <script>
        $(function() {
            if(location.pathname.indexOf("pay") != -1){
                $("#nav-link-select1").addClass("active");
            } else if(location.pathname.indexOf("api") != -1){
                $("#nav-link-select2").addClass("active");
            } else if(location.pathname.indexOf("price") != -1){
                $("#nav-link-select3").addClass("active");
            } else if(location.pathname.indexOf("guide") != -1){
                $("#nav-link-select4").addClass("active");
            } else if(location.pathname.indexOf("info") != -1){
                $("#nav-link-select5").addClass("active");
            } else if(location.pathname.indexOf("support") != -1){
                $("#nav-link-select6").addClass("active");
            }
        });
    </script>
</head>
<body>
<dl id="skip-nav">
    <dt>바로가기 메뉴</dt>
    <dd><a href="#site-nav" class="skip-item">네비게이션 바로가기</a></dd>
    <dd><a href="#site-main" class="skip-item">본문 바로가기</a></dd>
    <dd><a href="#site-footer" class="skip-item">푸터 바로가기</a></dd>
</dl>
<!--// skip-nav -->

<div id="site-container">
    <header id="site-header">
        <div id="site-header__container">
            <h1 id="site-logo">
                <a href="/">
                    <span class="screen-reader">유디페이 리셀러</span>
                    <span class="txt-beta">BETA</span>
                </a>
            </h1>
            <nav id="site-nav" aria-labelledby="global-nav">
                <h2 id="global-nav" class="screen-reader">주메뉴</h2>
                <ul class="nav">
                    <li class="nav-item nav-item-internal has-submenu">
                        <a href="/pay/api" class="nav-link" id="nav-link-select1">결제서비스</a>
                        <ul class="nav-sub-group">
                            <li class="nav-sub-item"><a href="/pay/api" class="nav-link">전자결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/camera" class="nav-link">카메라결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/touch" class="nav-link">터치결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/handwrite" class="nav-link">수기결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/remote" class="nav-link">원격결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/link" class="nav-link">링크결제</a></li>
                            <li class="nav-sub-item"><a href="/pay/enroll" class="nav-link">정기/등록결제</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-internal has-submenu">
                        <a href="/api/adjustNextDay" class="nav-link" id="nav-link-select2">부가서비스</a>
                        <ul class="nav-sub-group">
                            <li class="nav-sub-item"><a href="/api/adjustNextDay" class="nav-link">익일정산</a></li>
                            <%--<li class="nav-sub-item"><a href="/api/admin" class="nav-link">PC관리자</a></li>--%>
                            <li class="nav-sub-item"><a href="/api/msg" class="nav-link">문자</a></li>
                            <li class="nav-sub-item"><a href="/api/kakaotalk" class="nav-link">카카오톡</a></li>
                            <li class="nav-sub-item"><a href="/api/auth" class="nav-link">본인확인</a></li>
                            <li class="nav-sub-item"><a href="/api/accountHolder" class="nav-link">계좌 성명 조회</a></li>
                            <li class="nav-sub-item"><a href="/api/accountOccupy" class="nav-link">계좌 점유 인증</a></li>
                            <li class="nav-sub-item"><a href="/api/bankalarm" class="nav-link">뱅크알람</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-internal">
                        <a href="/price/price" class="nav-link" id="nav-link-select3"><span>API</span> 공급단가</a>
                    </li>
                    <li class="nav-item nav-item-internal">
                        <a href="/guide/guide" class="nav-link" id="nav-link-select4"><span>API</span> 매뉴얼</a>
                    </li>
                    <li class="nav-item nav-item-internal">
                        <a href="/info/info" class="nav-link" id="nav-link-select5">이용안내</a>
                    </li>
                    <li class="nav-item nav-item-internal has-submenu">
                        <a href="/support/list/notice" class="nav-link" id="nav-link-select6">고객센터</a>
                        <ul class="nav-sub-group">
                            <li class="nav-sub-item"><a href="/support/list/notice" class="nav-link">공지사항</a></li>
                            <li class="nav-sub-item"><a href="/support/list/faq" class="nav-link">FAQ</a></li>
                            <li class="nav-sub-item"><a href="/support/list/qna?qnaType=API" class="nav-link">API연동 게시판</a></li>
                            <li class="nav-sub-item"><a href="/support/list/qna?qnaType=DEVELOPER" class="nav-link">업그레이드 요청</a></li>
                            <li class="nav-sub-item"><a href="/support/list/qna?qnaType=API_QUEST" class="nav-link">결제/API 추가 요청</a></li>
                            <li class="nav-sub-item"><a href="/support/list/qna?qnaType=MANAGE" class="nav-link">대리점/리셀러 문의</a></li>
                            <li class="nav-sub-item"><a href="/support/list/qna?qnaType=ETC" class="nav-link">일반 문의</a></li>
                            <li class="nav-sub-item"><a href="https://udpay.co.kr/up/support" class="nav-link" target="_blank">유디페이 고객센터</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav">
                    <li class="nav-item nav-item-external">
                        <a href="/login" class="nav-link"><i class="ri-login-circle-line"></i> 로그인</a>
                    </li>
                    <li class="nav-item nav-item-external">
                        <a href="https://re.udpay.co.kr/joinAgree/RESELLER" class="nav-link nav-link-join" target="_blank"><i class="ri-user-add-line"></i> 회원가입</a>
                    </li>

                    <!--로그인 후-->
                    <%--<li class="nav-item nav-item-external">--%>
                        <%--<a href="https://re.udpay.co.kr/rm/main" class="nav-link" target="_blank"><i class="ri-settings-2-line"></i> 관리페이지 이동</a>--%>
                    <%--</li>--%>
                    <%--<li class="nav-item nav-item-external">--%>
                        <%--<a href="" class="nav-link"><i class="ri-logout-circle-line"></i> 로그아웃</a>--%>
                    <%--</li>--%>
                </ul>
            </nav>
            <div id="site-nav-action">
                <div class="menu menu--close1">
                    <div class="menu__icon">
                        <div class="menu__line menu__line--1"></div>
                        <div class="menu__line menu__line--2"></div>
                        <div class="menu__line menu__line--3"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- //site-header -->