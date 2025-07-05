import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import { useQueryParams } from '../hooks/useQueryParams';
 import './styles/Home.css';
const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [jumpPage, setJumpPage] = useState('');

    const { getParam, setParam, setMultipleParams } = useQueryParams();

    // Get current page from URL params
    const currentPage = parseInt(getParam('page')) || 1;
    const searchQuery = getParam('search');
    const statusFilter = getParam('status');

    // Fetch characters with pagination (show 10 characters per page)
    const fetchCharacters = useCallback(async (page = 1, name = '', status = '') => {
        console.log('Fetching page:', page);
        try {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams({
                page: page.toString()
            });

            if (name) {
                params.append('name', name);
            }

            if (status) {
                params.append('status', status);
            }

            console.log('API URL:', `https://rickandmortyapi.com/api/character/?${params}`);
            const response = await fetch(`https://rickandmortyapi.com/api/character/?${params}`);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('No characters found');
                }
                throw new Error('Failed to fetch characters');
            }

            const data = await response.json();

            // Show first 10 characters from the API response for this page
            const limitedCharacters = data.results.slice(0, 10);

            setCharacters(limitedCharacters);
            setTotalPages(data.info.pages);
            setTotalCharacters(data.info.count);
        } catch (err) {
            setError(err.message);
            setCharacters([]);
            setTotalPages(1);
            setTotalCharacters(0);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch characters when URL parameters change
    useEffect(() => {
        fetchCharacters(currentPage, searchQuery, statusFilter);
    }, [currentPage, searchQuery, statusFilter, fetchCharacters]);

    // Handle search
    const handleSearch = (query) => {
        setMultipleParams({
            search: query,
            page: '1'
        });
    };

    // Handle status filter
    const handleStatusFilter = (status) => {
        setMultipleParams({
            status: status,
            page: '1'
        });
    };

    // Handle page navigation
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setParam('page', page.toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Handle jump to page
    const handleJumpToPage = () => {
        const page = parseInt(jumpPage);
        if (page >= 1 && page <= totalPages) {
            handlePageChange(page);
            setJumpPage('');
        }
    };

    // Generate page numbers for pagination
    const generatePageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('ellipsis-1');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('ellipsis-2');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('ellipsis-3');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('ellipsis-4');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (loading) {
        return (
            <div className="home">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="hero-title-gradient">Rick & Morty</span>
                            <span className="hero-title-normal">Characters</span>
                        </h1>
                        <p className="hero-subtitle">Explore the multiverse of characters</p>
                    </div>
                </div>

                <SearchBar
                    onSearch={handleSearch}
                    onStatusFilter={handleStatusFilter}
                    searchValue={searchQuery}
                    statusValue={statusFilter}
                />

                <div className="loading-container">
                    <div className="loading-spinner">
                        <div className="portal-spinner">
                            <div className="portal-ring"></div>
                            <div className="portal-ring"></div>
                            <div className="portal-ring"></div>
                        </div>
                    </div>
                    <p className="loading-text">Loading characters from the multiverse...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="home">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="hero-title-gradient">Rick & Morty</span>
                            <span className="hero-title-normal">Characters</span>
                        </h1>
                        <p className="hero-subtitle">Explore the multiverse of characters</p>
                    </div>
                </div>

                <SearchBar
                    onSearch={handleSearch}
                    onStatusFilter={handleStatusFilter}
                    searchValue={searchQuery}
                    statusValue={statusFilter}
                />

                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <h3 className="error-title">Oops! Something went wrong</h3>
                    <p className="error-message">{error}</p>
                    <button
                        className="error-retry-btn"
                        onClick={() => fetchCharacters(currentPage, searchQuery, statusFilter)}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-gradient">Rick & Morty</span>
                        <span className="hero-title-normal">Characters</span>
                    </h1>
                    <p className="hero-subtitle">Explore the multiverse of characters</p>
                </div>
            </div>

            <SearchBar
                onSearch={handleSearch}
                onStatusFilter={handleStatusFilter}
                searchValue={searchQuery}
                statusValue={statusFilter}
            />

            {characters.length > 0 && (
                <div className="results-header">
                    <div className="results-info">
                        <h2 className="results-title">
                            <span className="results-count">{characters.length}</span>
                            <span className="results-text">Characters Found</span>
                        </h2>
                        {(searchQuery || statusFilter) && (
                            <div className="active-filters">
                                {searchQuery && (
                                    <span className="filter-tag">
                                        🔍 "{searchQuery}"
                                    </span>
                                )}
                                {statusFilter && (
                                    <span className="filter-tag">
                                        📊 {statusFilter}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="results-stats">
                        <div className="stat-item">
                            <span className="stat-icon">📄</span>
                            <span className="stat-text">Page {currentPage} of {totalPages}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">👥</span>
                            <span className="stat-text">{totalCharacters} Total</span>
                        </div>
                    </div>
                </div>
            )}

            {characters.length === 0 ? (
                <div className="no-results">
                    <div className="no-results-icon">🌌</div>
                    <h3 className="no-results-title">No characters found in this dimension</h3>
                    <p className="no-results-message">
                        Try adjusting your search criteria or explore different filters
                    </p>
                    <button
                        className="no-results-clear-btn"
                        onClick={() => setMultipleParams({ search: '', status: '', page: '1' })}
                    >
                        Clear All Filters
                    </button>
                </div>
            ) : (
                <>
                    <div className="characters-section">
                        <div className="characters-grid">
                            {characters.map((character, index) => (
                                <div
                                    key={character.id}
                                    className="character-card-wrapper"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CharacterCard character={character} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pagination-section">
                        <div className="pagination-container">
                            <div className="pagination-controls">
                                <button
                                    className="pagination-btn prev"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <span className="pagination-btn-icon">←</span>
                                    Previous
                                </button>

                                <div className="page-numbers">
                                    {generatePageNumbers().map((page, index) => (
                                        typeof page === 'string' && page.startsWith('ellipsis') ? (
                                            <span key={page} className="page-ellipsis">...</span>
                                        ) : (
                                            <button
                                                key={page}
                                                className={`page-number ${currentPage === page ? 'active' : ''}`}
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </button>
                                        )
                                    ))}
                                </div>

                                <button
                                    className="pagination-btn next"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                    <span className="pagination-btn-icon">→</span>
                                </button>
                            </div>

                            <div className="pagination-info">
                                <div className="pagination-jump">
                                    <span className="jump-label">Jump to page:</span>
                                    <input
                                        type="number"
                                        className="jump-input"
                                        value={jumpPage}
                                        onChange={(e) => setJumpPage(e.target.value)}
                                        min="1"
                                        max={totalPages}
                                        placeholder="1"
                                    />
                                    <button
                                        className="jump-btn"
                                        onClick={handleJumpToPage}
                                        disabled={!jumpPage || parseInt(jumpPage) < 1 || parseInt(jumpPage) > totalPages}
                                    >
                                        Go
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;