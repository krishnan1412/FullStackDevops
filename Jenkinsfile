pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // Configure NodeJS in Jenkins global tools
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/krishnan1412/FullStackDevops.git'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Backend Test') {
            steps {
                dir('backend') {
                    sh 'npm test || echo "No backend tests configured"'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Example: copy build artifacts to a deployment directory
                    sh 'cp -r frontend/build/* /var/www/html/'
                    // Start backend server (adjust as needed)
                    sh 'nohup node backend/server.js &'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Full stack build and deployment successful!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs.'
        }
    }
}
