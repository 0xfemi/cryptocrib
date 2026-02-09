// Animated words rotation with typewriter effect
const words = ['Crypto trading', 'NFTs', 'Web3', 'Defi'];
let currentWordIndex = 0;
let isDeleting = false;
let currentText = '';
let typeSpeed = 100;
let deleteSpeed = 50;
let pauseTime = 2000;

function typeWriter() {
    const animatedWordElement = document.querySelector('.animated-words .word-active');
    if (!animatedWordElement) return;
    
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        // Delete characters
        currentText = currentWord.substring(0, currentText.length - 1);
        animatedWordElement.textContent = currentText;
        
        if (currentText === '') {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeSpeed = 100; // Reset typing speed
        } else {
            setTimeout(typeWriter, deleteSpeed);
            return;
        }
    } else {
        // Type characters
        currentText = currentWord.substring(0, currentText.length + 1);
        animatedWordElement.textContent = currentText;
        
        if (currentText === currentWord) {
            // Word is complete, pause before deleting
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
            return;
        }
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start word rotation after page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedWordElement = document.querySelector('.animated-words .word-active');
    if (animatedWordElement) {
        // Start typing the first word
        currentText = '';
        currentWordIndex = 0;
        isDeleting = false;
        typeWriter();
    }
    
    // Footer animation
    const footerWordElement = document.querySelector('.animated-words-footer .word-active-footer');
    if (footerWordElement) {
        let footerCurrentText = '';
        let footerCurrentWordIndex = 0;
        let footerIsDeleting = false;
        const footerTypeSpeed = 100;
        const footerDeleteSpeed = 50;
        const footerPauseTime = 2000;
        
        function footerTypeWriter() {
            if (!footerWordElement) return;
            
            const currentWord = words[footerCurrentWordIndex];
            
            if (footerIsDeleting) {
                // Delete characters
                footerCurrentText = currentWord.substring(0, footerCurrentText.length - 1);
                footerWordElement.textContent = footerCurrentText;
                
                if (footerCurrentText === '') {
                    footerIsDeleting = false;
                    footerCurrentWordIndex = (footerCurrentWordIndex + 1) % words.length;
                } else {
                    setTimeout(footerTypeWriter, footerDeleteSpeed);
                    return;
                }
            } else {
                // Type characters
                footerCurrentText = currentWord.substring(0, footerCurrentText.length + 1);
                footerWordElement.textContent = footerCurrentText;
                
                if (footerCurrentText === currentWord) {
                    // Word is complete, pause before deleting
                    footerIsDeleting = true;
                    setTimeout(footerTypeWriter, footerPauseTime);
                    return;
                }
            }
            
            setTimeout(footerTypeWriter, footerTypeSpeed);
        }
        
        // Start footer typing animation
        footerCurrentText = '';
        footerCurrentWordIndex = 0;
        footerIsDeleting = false;
        footerTypeWriter();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.benefit-card, .step-card, .crypto-item, .faq-item, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = [
    {
        text: '"The Cryptocrib Academy, has been one of the best things to happen to me, through them I have been able to get my entry level understanding of the world of blockchain up until how advanced I am currently. They Have also been a supportive family too, helping to keep sanity when things are tough and also encouragement to be better. Thank you Cryptocrib, Thank you Cryptocrib\'s Academy."',
        name: 'Fashaking',
        role: 'Contributor, Cryptocrib',
        image: 'images/Fashaking.jpeg'
    },
    {
        text: '"The gamified learning experience made complex DeFi concepts actually enjoyable. Earning points and NFT certificates while learning kept me motivated throughout the entire program."',
        name: 'Sarah K.',
        role: 'DeFi Learner'
    },
    {
        text: '"I\'ve tried multiple crypto education platforms, but Cryptocrib\'s interactive programs and learn-to-earn model are unmatched. The community support and expert-led sessions are invaluable."',
        name: 'Michael T.',
        role: 'Crypto Trader'
    }
];

function updateTestimonial(index) {
    const testimonialCard = document.querySelector('.testimonial-card');
    const testimonialText = testimonialCard.querySelector('.testimonial-text');
    const authorName = testimonialCard.querySelector('.author-name');
    const authorRole = testimonialCard.querySelector('.author-role');
    const counter = testimonialCard.querySelector('.testimonial-counter');
    const avatarImg = testimonialCard.querySelector('.avatar-img img');
    const avatarLink = testimonialCard.querySelector('.avatar-link');
    
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        testimonialText.textContent = testimonials[index].text;
        authorName.textContent = testimonials[index].name;
        authorRole.textContent = testimonials[index].role;
        counter.textContent = `${index + 1}/${testimonials.length}`;
        
        // Show Fashaking image and link only for first testimonial (index 0)
        if (avatarImg && avatarLink) {
            if (index === 0 && testimonials[index].image) {
                avatarImg.src = testimonials[index].image;
                avatarImg.style.display = 'block';
                avatarLink.href = 'https://x.com/FASHAKING3';
                avatarLink.style.display = 'block';
            } else {
                avatarImg.style.display = 'none';
                avatarLink.style.display = 'none';
            }
        }
        
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateY(0)';
    }, 300);
}

document.querySelector('.testimonial-btn.next')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

document.querySelector('.testimonial-btn.prev')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

// Initialize first testimonial with image
updateTestimonial(0);

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
}, 5000);

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            const content = faq.querySelector('.faq-content');
            if (content) {
                content.style.maxHeight = null;
            }
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            this.classList.add('active');
            // You can add content expansion here if needed
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(8, 7, 14, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.backgroundColor = 'rgba(8, 7, 14, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Fetch real-time crypto prices from CoinGecko API
async function fetchCryptoPrices() {
    const coinIds = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'solana'];
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd&include_24hr_change=true`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Store previous prices for change calculation
        const cryptoItems = document.querySelectorAll('.crypto-item');
        
        cryptoItems.forEach(item => {
            const coinId = item.getAttribute('data-coin-id');
            const coinData = data[coinId];
            
            if (coinData) {
                const price = coinData.usd;
                const change24h = coinData.usd_24h_change || 0;
                
                // Format price based on value
                let formattedPrice;
                if (price < 1) {
                    formattedPrice = price.toFixed(4);
                } else if (price < 1000) {
                    formattedPrice = price.toFixed(2);
                } else {
                    formattedPrice = price.toLocaleString('en-US', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                    });
                }
                
                // Update price
                const amountElement = item.querySelector('.amount');
                if (amountElement) {
                    amountElement.textContent = formattedPrice;
                }
                
                // Update change
                const changeElement = item.querySelector('.change');
                if (changeElement) {
                    const isPositive = change24h >= 0;
                    const changeText = `${isPositive ? '+' : ''}${change24h.toFixed(2)}%`;
                    changeElement.textContent = changeText;
                    changeElement.className = `change ${isPositive ? 'positive' : 'negative'}`;
                    
                    // Add pulse animation
                    changeElement.style.animation = 'pulse 0.5s ease';
                }
            }
        });
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        // Fallback: show error message
        const cryptoItems = document.querySelectorAll('.crypto-item');
        cryptoItems.forEach(item => {
            const amountElement = item.querySelector('.amount');
            if (amountElement) {
                amountElement.textContent = 'Error';
            }
        });
    }
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Fetch prices on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoPrices();
    // Update prices every 30 seconds
    setInterval(fetchCryptoPrices, 30000);
});

// Button hover effects
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Stagger animation for crypto list
const cryptoList = document.querySelector('.crypto-list');
if (cryptoList) {
    const items = cryptoList.querySelectorAll('.crypto-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed for smaller screens)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    
    if (window.innerWidth <= 809) {
        menuToggle.style.display = 'block';
        document.querySelector('.nav-container').prepend(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Add smooth reveal animation for sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for revealed state
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(revealStyle);

// Cursor effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .crypto-item, .benefit-card, .step-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
        document.body.style.cursor = 'pointer';
    });
    
    el.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default';
    });
});

// FAQ Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        // Click handler for the entire button
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = this.classList.contains('active');
            
            // Toggle current item
            if (isActive) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });
        
        // Also handle clicks on the plus icon specifically
        const plusIcon = item.querySelector('.faq-plus');
        if (plusIcon) {
            plusIcon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isActive = item.classList.contains('active');
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
    
    console.log('FAQ initialized with', faqItems.length, 'items');
});

console.log('Cryptocrib website loaded successfully!');

// Dashboard Welcome Message Update
function updateWelcomeMessage() {
    const welcomeTitle = document.getElementById('welcome-title');
    if (!welcomeTitle) return;
    
    // Load username from settings
    const savedData = localStorage.getItem('cryptocrib_settings');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            if (data.cribName && data.cribName.trim()) {
                welcomeTitle.textContent = `Welcome back, ${data.cribName}`;
            } else if (data.username && data.username.trim()) {
                welcomeTitle.textContent = `Welcome back, ${data.username}`;
            } else {
                welcomeTitle.textContent = 'Welcome back, 0xfemi';
            }
        } catch (e) {
            console.error('Error parsing settings:', e);
            welcomeTitle.textContent = 'Welcome back, 0xfemi';
        }
    } else {
        welcomeTitle.textContent = 'Welcome back, 0xfemi';
    }
}

// Update sidebar name on dashboard
function updateSidebarName() {
    const sidebarName = document.querySelector('.profile-name');
    if (!sidebarName) return;
    
    const savedData = localStorage.getItem('cryptocrib_settings');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            if (data.cribName && data.cribName.trim()) {
                sidebarName.textContent = data.cribName;
            } else if (data.username && data.username.trim()) {
                sidebarName.textContent = data.username;
            } else {
                sidebarName.textContent = '0xfemi';
            }
        } catch (e) {
            console.error('Error parsing settings:', e);
            sidebarName.textContent = '0xfemi';
        }
    } else {
        sidebarName.textContent = '0xfemi';
    }
}

// Update all dashboard elements
function updateDashboard() {
    updateWelcomeMessage();
    updateSidebarName();
    updateHoursSpentUI();
}

// Update welcome message on dashboard load
document.addEventListener('DOMContentLoaded', function() {
    // Initial update
    updateDashboard();
    
    // Listen for storage changes (from other tabs/windows)
    window.addEventListener('storage', function(e) {
        if (e.key === 'cryptocrib_settings') {
            updateDashboard();
        }
    });
    
    // Custom event listener for same-tab updates (when settings are saved)
    window.addEventListener('settingsUpdated', function() {
        updateDashboard();
    });
    
    // Update when page becomes visible (user navigates back)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateDashboard();
        }
    });
    
    // Update when window gets focus (user switches back to tab)
    window.addEventListener('focus', function() {
        updateDashboard();
    });
    
    // Also check periodically (every 2 seconds) if on dashboard page
    if (window.location.pathname.includes('dashboard.html') || window.location.pathname.endsWith('dashboard.html')) {
        setInterval(function() {
            updateDashboard();
        }, 2000);
    }
});

// ---------------------------
// Hours Spent Tracking Module
// ---------------------------
(function initHoursSpentTracker() {
    const STORAGE_KEY = 'cryptocrib_time';
    const WEEKLY_GOAL_HOURS = 20; // change if desired
    const IDLE_THRESHOLD_MS = 60 * 1000; // 1 minute idle pause
    let lastActivityTs = Date.now();
    let ticking = false;
    let tickIntervalId = null;

    function getWeekStart(date) {
        const d = new Date(date);
        const day = d.getDay(); // 0 Sun .. 6 Sat
        const diffToMonday = (day + 6) % 7; // days since Monday
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() - diffToMonday);
        return d.toISOString().slice(0, 10); // YYYY-MM-DD
    }

    function loadTime() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return {
                    totalSeconds: 0,
                    weeklySeconds: 0,
                    weekStart: getWeekStart(new Date())
                };
            }
            const data = JSON.parse(raw);
            // Reset weekly if week changed
            const currentWeekStart = getWeekStart(new Date());
            if (data.weekStart !== currentWeekStart) {
                data.weekStart = currentWeekStart;
                data.weeklySeconds = 0;
            }
            if (typeof data.totalSeconds !== 'number') data.totalSeconds = 0;
            if (typeof data.weeklySeconds !== 'number') data.weeklySeconds = 0;
            return data;
        } catch {
            return {
                totalSeconds: 0,
                weeklySeconds: 0,
                weekStart: getWeekStart(new Date())
            };
        }
    }

    function saveTime(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        // Notify other listeners to update UI
        const evt = new Event('storage');
        Object.defineProperty(evt, 'key', { value: STORAGE_KEY });
        Object.defineProperty(evt, 'newValue', { value: JSON.stringify(data) });
        window.dispatchEvent(evt);
    }

    function secondsToHoursLabel(seconds) {
        const hours = seconds / 3600;
        return `${hours.toFixed(1)}h`;
    }

    // UI updates
    window.updateHoursSpentUI = function updateHoursSpentUI() {
        const valueEl = document.getElementById('hours-spent-value');
        const barEl = document.getElementById('hours-spent-progress');
        if (!valueEl && !barEl) return;
        const data = loadTime();
        if (valueEl) valueEl.textContent = secondsToHoursLabel(data.totalSeconds);
        if (barEl) {
            const pct = Math.min(100, (data.weeklySeconds / (WEEKLY_GOAL_HOURS * 3600)) * 100);
            barEl.style.width = `${pct.toFixed(0)}%`;
        }
    };

    function shouldCountNow() {
        // Count only when page is visible and the user was active recently
        if (document.hidden) return false;
        if (!document.hasFocus && typeof document.hasFocus === 'function') {
            // if hasFocus exists and returns false, don't count
            if (!document.hasFocus()) return false;
        }
        return Date.now() - lastActivityTs < IDLE_THRESHOLD_MS;
    }

    function tick() {
        if (!shouldCountNow()) return;
        const data = loadTime();
        data.totalSeconds += 1;
        data.weeklySeconds += 1;
        saveTime(data);
        // If UI is present, update immediately
        updateHoursSpentUI();
    }

    function startTicking() {
        if (ticking) return;
        ticking = true;
        tickIntervalId = setInterval(tick, 1000);
    }

    function stopTicking() {
        ticking = false;
        if (tickIntervalId) {
            clearInterval(tickIntervalId);
            tickIntervalId = null;
        }
    }

    // Activity listeners
    ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(evt =>
        window.addEventListener(evt, () => (lastActivityTs = Date.now()))
    );

    // Visibility/Focus
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            lastActivityTs = Date.now();
            startTicking();
        } else {
            stopTicking();
        }
    });
    window.addEventListener('focus', () => {
        lastActivityTs = Date.now();
        startTicking();
    });
    window.addEventListener('blur', () => {
        stopTicking();
    });

    // Cross-tab UI updates
    window.addEventListener('storage', (e) => {
        if (e && e.key === STORAGE_KEY) {
            updateHoursSpentUI();
        }
    });

    // Initialize
    lastActivityTs = Date.now();
    startTicking();
    // Ensure UI reflects saved values on load
    document.addEventListener('DOMContentLoaded', updateHoursSpentUI);
})();
