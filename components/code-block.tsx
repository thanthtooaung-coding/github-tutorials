"use client"

import type React from "react"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  showCopy?: boolean
}

interface HighlightedPart {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function CodeBlock({ code, language = "bash", showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  // Parse and highlight code into React elements
  const parseCode = (code: string, lang: string): React.ReactNode[] => {
    if (lang === "bash" || lang === "shell") {
      const lines = code.split("\n")
      return lines.map((line, lineIndex) => {
        const parts: React.ReactNode[] = []
        const remaining = line
        let partIndex = 0

        // Process git commands
        const gitCommandRegex = /(git\s+\w+)/g
        let lastIndex = 0
        let match

        while ((match = gitCommandRegex.exec(line)) !== null) {
          // Add text before the match
          if (match.index > lastIndex) {
            parts.push(<span key={`${lineIndex}-${partIndex++}`}>{line.substring(lastIndex, match.index)}</span>)
          }

          // Add the highlighted git command
          parts.push(
            <span key={`${lineIndex}-${partIndex++}`} style={{ color: "#ff7b72", fontWeight: "600" }}>
              {match[0]}
            </span>,
          )

          lastIndex = match.index + match[0].length
        }

        // Add remaining text
        if (lastIndex < line.length) {
          const remainingText = line.substring(lastIndex)

          // Highlight strings in quotes
          const stringParts: React.ReactNode[] = []
          const stringRegex = /"[^"]*"/g
          let stringLastIndex = 0
          let stringMatch

          while ((stringMatch = stringRegex.exec(remainingText)) !== null) {
            if (stringMatch.index > stringLastIndex) {
              stringParts.push(
                <span key={`${lineIndex}-str-${stringParts.length}`}>
                  {remainingText.substring(stringLastIndex, stringMatch.index)}
                </span>,
              )
            }

            stringParts.push(
              <span key={`${lineIndex}-str-${stringParts.length}`} style={{ color: "#a5d6ff" }}>
                {stringMatch[0]}
              </span>,
            )

            stringLastIndex = stringMatch.index + stringMatch[0].length
          }

          if (stringLastIndex < remainingText.length) {
            stringParts.push(
              <span key={`${lineIndex}-str-${stringParts.length}`}>{remainingText.substring(stringLastIndex)}</span>,
            )
          }

          parts.push(...stringParts)
        }

        return (
          <div key={lineIndex}>
            {parts.length > 0 ? parts : <span>{line}</span>}
            {lineIndex < lines.length - 1 && "\n"}
          </div>
        )
      })
    }

    if (lang === "markdown") {
      const lines = code.split("\n")
      return lines.map((line, lineIndex) => {
        // Highlight headers
        if (line.match(/^#{1,6}\s+/)) {
          return (
            <div key={lineIndex} style={{ color: "#79c0ff", fontWeight: "bold" }}>
              {line}
              {lineIndex < lines.length - 1 && "\n"}
            </div>
          )
        }

        // Regular text
        return (
          <div key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && "\n"}
          </div>
        )
      })
    }

    // Default: no highlighting
    return [<span key="default">{code}</span>]
  }

  const highlightedContent = parseCode(code, language)

  return (
    <div className="relative group">
      <pre className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-[#e6edf3] font-mono block whitespace-pre-wrap">{highlightedContent}</code>
      </pre>
      {showCopy && (
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-[#161b22] border border-gray-700 text-gray-400 hover:text-white hover:bg-[#1c2128] transition-colors opacity-0 group-hover:opacity-100"
          title="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      )}
    </div>
  )
}
